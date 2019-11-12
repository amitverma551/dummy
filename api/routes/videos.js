var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/story');

//var db = "mongodb://localhost:27017/cosmodb";
var db = "mongodb://admin:india123@ds245018.mlab.com:45018/cosmodb";
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.use(function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Origin", " https://fashion-post.herokuapp.com ");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// router.get('/posts', function(req, res, next){
//     let page = parseInt(req.query.page);
//     console.log(page);
//     console.log('Get request for all posts');
//     Post.find({}, {
//         "nid" : 1,
//         "title":1,
//         "field_dek":1,
//         "type":1,
//         "field_meta_title":1,
//         "field_meta_description":1,
//         "field_meta_keyword":1,
//         "image":1,
//         "field_editory_by":1,
//         "path":1,
//         "created":1,
//         "field_section":1,
//         "field_section_url":1,
//         "field_content_type":1,
//         "notes":1,
//         "notes_syn":1,
//         "userData_node":1,
//         "userData":1,
//     }).limit(page)
//     .exec(function(err, posts){
//         if(err){
//             res.send("Error retrieving posts");
//         }else{
//             res.json(posts);
//         } 
//     })
// })

router.get('/posts', async function(req, res, next){
    const lmt = parseInt(req.query._limit);
    const resPerPage = lmt || 10;
    const page = parseInt(req.query._page) || 1;
    console.log('Get request for all posts');
    try {
    let stories = await Post.find({}, {
        "nid" : 1,
        "title":1,
        "field_dek":1,
        "type":1,
        "field_meta_title":1,
        "field_meta_description":1,
        "field_meta_keyword":1,
        "image":1,
        "field_editory_by":1,
        "path":1,
        "created":1,
        "field_section":1,
        "field_section_url":1,
        "field_content_type":1,
        "notes":1,
        "notes_syn":1,
        "userData_node":1,
        "userData":1,
    }).skip((resPerPage * page) - resPerPage).limit(resPerPage)
    .exec(function(err, posts){
        if(err){
            res.send("Error retrieving posts");
        }else{
            res.json(posts);
        } 
    })

    res.render({
        stories : stories
    })
} catch (err) {
    throw new Error(err);
  }

})



router.get('/post/:id', function(req, res, next){
    console.log('Get request for a single post');
    Post.findOne({"nid":req.params.id})
    .exec(function(err, posts){
        if(err){
            res.send("Error retrieving post");
        }else{
            res.json(posts);
        }
    })
})

router.get('/posts/:id', function(req, res, next){
    const lmt = parseInt(req.query._limit);
    const resPerPage = lmt || 10;
    const page = parseInt(req.query._page) || 1;
    console.log('Get request for a single post');
    const paramCat = req.params.id;
    const catName = paramCat.charAt(0).toUpperCase() + paramCat.slice(1); // param cat to capitalize
    Post.find({"field_section":catName},{
        "nid" : 1,
        "title":1,
        "field_dek":1,
        "type":1,
        "field_meta_title":1,
        "field_meta_description":1,
        "field_meta_keyword":1,
        "image":1,
        "field_editory_by":1,
        "path":1,
        "created":1,
        "field_section":1,
        "field_section_url":1,
        "field_content_type":1,
        "notes":1,
        "notes_syn":1,
        "userData_node":1,
        "userData":1,
        "field_feature_image":1
    }).skip((resPerPage * page) - resPerPage).limit(resPerPage)
    .exec(function(err, posts){
        if(err){
            res.send("Error retrieving post");
        }else{
            res.json(posts);
        }
    })
})


// search api

router.get('/search', function(req, res, next){
    const srch_query = req.query.q;
    const lmt = parseInt(req.query._limit);
    const resPerPage = lmt || 10;
    const page = parseInt(req.query._page) || 1;
    console.log('Get request for a single post');
    Post.find({$text: {$search: srch_query}},{
        "nid" : 1,
        "title":1,
        "field_dek":1,
        "type":1,
        "field_meta_title":1,
        "field_meta_description":1,
        "field_meta_keyword":1,
        "image":1,
        "field_editory_by":1,
        "path":1,
        "created":1,
        "field_section":1,
        "field_section_url":1,
        "field_content_type":1,
        "notes":1,
        "notes_syn":1,
        "userData_node":1,
        "userData":1,
        "field_feature_image":1
    }).skip((resPerPage * page) - resPerPage).limit(resPerPage)
    .exec(function(err, posts){
        if(err){
            res.send("Error retrieving post");
        }else{
            res.json(posts);
        }
    })
})


router.post('/post', function(req, res, next){
    console.log('Post a video');
    var newPost = new Post(req.body);
    newPost.nid=req.body.nid;
    newPost.title=req.body.title;
    newPost.field_dek=req.body.field_dek;
    newPost.type=req.body.type;
    newPost.field_additional_custom_editors=req.body.field_additional_custom_editors;
    newPost.field_gallery_multiple_image=req.body.field_gallery_multiple_image;
    newPost.field_feature_image=req.body.field_feature_image;
    newPost.field_video_trans_url=req.body.field_video_trans_url;
    newPost.field_editory_by=req.body.field_editory_by;
    newPost.path=req.body.path;
    newPost.created=req.body.created;
    newPost.field_section=req.body.field_section;
    newPost.field_section_url=req.body.field_section_url;
    newPost.field_content_type=req.body.field_content_type;
    newPost.field_all_tags=req.body.field_all_tags;
    newPost.field_meta_title=req.body.field_meta_title;
    newPost.field_meta_description=req.body.field_meta_description;
    newPost.field_meta_keyword=req.body.field_meta_keyword;
    newPost.field_social_title=req.body.field_social_title;
    newPost.field_social_teaser=req.body.field_social_teaser;
    newPost.prev=req.body.prev;
    newPost.next=req.body.next;
    newPost.body=req.body.body;
    newPost.notes=req.body.notes;
    newPost.notes_syn=req.body.notes_syn;
    newPost.userData_node=req.body.userData_node;
    newPost.userData=req.body.userData;
    newPost.sch_body=req.body.sch_body;
    newPost.save(function(err, insertedVideo){
        if(err){
            res.send("Error saving video");
        }else{
            res.json(insertedVideo);
        }
    });
})

router.put('/post/:id', function(req, res, next){
    console.log('Update a video');
    Story.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err, updatedVideo){
        if(err){
            res.send("Error updating video");
        }else{
            res.json(updatedVideo);
        }
    }
    )
})

router.delete('/post/:id', function(req, res, next){
    console.log('Deleting a post');
    Post.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting post");
        }else{
            res.json(deletedVideo);
        }
    })
})

module.exports = router;
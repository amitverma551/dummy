var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
    nid:String,
    title:String,
    field_dek:String,
    type:String,
    field_additional_custom_editors:String,
    field_gallery_multiple_image:String,
    field_feature_image:{
    target_id:String,
    alt:String,
    title:String,
    description:String,
    width:String,
    height:String,
    path:String
    },
    field_video_trans_url:String,
    field_editory_by:String,
    path:String,
    created:String,
    field_section:String,
    field_section_url:String,
    field_content_type:String,
    field_all_tags:String,
    field_meta_title:String,
    field_meta_description:String,
    field_meta_keyword:String,
    field_social_title:String,
    field_social_teaser:String,
    body:String,
    notes:String,
    notes_syn:String,
    userData_node:String,
    userData:String,
    sch_body:String
    }, { versionKey: false });
storySchema.index({'$**': 'text'});
module.exports = mongoose.model('posts', storySchema, 'posts');
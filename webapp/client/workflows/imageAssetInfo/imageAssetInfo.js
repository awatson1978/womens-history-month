Session.setDefault('selectedImageId', false);

Template.assetsDisplayTemplate.helpers({
  getSelectedAvatar: function(){
    if(Session.get("selectedImage")){
      return Session.get("selectedImage");
    }else{
      return "/packages/clinical_active-users/public/Default_User.png";
    }
  }
});


Template.imageAssetInfoTemplate.helpers({
  anatomy_image: function(){
    if(Session.get("anchorImage")){
      return Session.get("anchorImage");
      // return 'images/grays.anatomy.tiles/' + Session.get("anchorImage") + '.png'
    }else{
      return "/images/placeholder-240x240.gif";
    }
  },
  asset_id: function () {
    if(Session.get("selectedImageId")){
      return Session.get("selectedImageId");
    }else{
      return "no id availablef";
    }
  },
  asset_name: function () {
    if(Session.get("asset_id")){
      return Session.get("asset_id");
    }else{
      return "no id availablef";
    }
  },
  asset_filename: function () {
    if(Session.get("anchorImage")){
      // var url = Session.get("anchorImage");
      // return url.substring(url.lastIndexOf('/')+1);
      return Session.get("anchorImage");
      // return 'images/grays.anatomy.tiles/' + Session.get("anchorImage") + '.png'
    }else{
      return "no anchor image specified";
    }
  },
  asset_project_id: function () {
    return "null";
  },
  asset_description: function () {
    return "lorem ipsum...";
  }
});

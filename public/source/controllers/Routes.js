/**
* Router kind
* Takes events form the URL hashtag, e.g. #/login path gets routed to the login handler
*
* TODO Is there an equivalent to routing with an argument. I could strip args off in the pre handler, but this
* makes the app interdependent on specialized server code
*
* - loadBodyContent(kindByName, renderFlag, skipWaterfallFlag)
* - logout()
* - message()
* - systemMessage()
* - userManagementInfo()
* - updateMyUserInfo()
* - updateMyPassword()
* - home()
* - homeEvent()
* - checkLogin()
* - login()
* - loginEvent()
* - userSignup()
* - forgotPassword()
* - resendEmail()
* - publicBroadcastMessage()
* - authenticate()
*/
enyo.kind({
    kind: 'enyo.Router'
  , name: 'Bootplate.Routes'
  , routes: [
    { path: '/'
      , 'default': true
      , handler: 'checkLogin'
      , change:'true'
    }
    , { path: '/login'
        , handler: 'login'
        , change:'true'
    }
    , { path: '/loginEvent'
        , handler: 'loginEvent'
        , change:'true'
    }
    , { path: '/authenticate'
        , handler: 'authenticate'
        , change:'true'
    }
    , { path: '/publicBroadcastMessage'
        , handler: 'publicBroadcastMessage'
    }
    , { path: '/userSignup'
        , handler: 'userSignup'
    }
    , { path: '/forgotPassword'
        , handler: 'forgotPassword'
    }
    , { path: '/resendEmail'
        , handler: 'resendEmail'
    }
    , { path: '/logout'
        , handler: 'logout'
        , change:'true'
    }
    , { path: '/message'
        , handler: 'message'
    }
    , { path: '/systemMessage'
        , handler: 'systemMessage'
    }
    , { path: '/home'
        , handler: 'home'
    }
    , { path: '/homeEvent'
        , handler: 'homeEvent'
    }
    , { path: '/userManagementInfo'
        , handler: 'userManagementInfo'
    }
    , { path: '/updateMyUserInfo'
        , handler: 'updateMyUserInfo'
    }
    , { path: '/updateMyPassword'
        , handler: 'updateMyPassword'
    }
  ]
  , loadBodyContent: function (kindByName, renderFlag, skipWaterfallFlag) {
      if (mvcApp.view && mvcApp.view.$ && mvcApp.view.$.bodyContainer) {
        console.log("loadBodyContent " + kindByName);
        var owner = mvcApp.view.$.bodyContainer;
        owner.destroyClientControls();
        mvcApp.view.body = owner.createComponent({kind: kindByName, name:'bodyContent'});
        mvcApp.view.body.render();
        owner.$.bodyContent.setupBodyContent(owner, renderFlag);
    }
    // every navigation check the user validation
    // if they try to navigate to a page with out proper access, they get redirected
    if (!skipWaterfallFlag) {mvcApp.waterfall('onIsUserValidated');}
  }
  , logout: function () {
      console.log("logout router");
      mvcApp.data = {};
      mvcApp.waterfall('onLogout');
      return true;
  }
  , systemMessage: function () {
      console.log("systemMessage router");
      this.loadBodyContent('Bootplate.SystemMessageContent', false);
  }
  , userManagementInfo: function () {
      console.log("userManagementInfo router");
      this.loadBodyContent('Bootplate.UserManagementContent', false);
  }
  , message: function () {
      console.log("message router");
      this.loadBodyContent('Bootplate.MessageContent', true);
  }
  , updateMyUserInfo: function () {
      console.log("updateMyUserInfo router");
      this.loadBodyContent('Bootplate.UpdateMyUserInfoContent', false);
  }
  , updateMyPassword: function () {
      console.log("updateMyPassword router");
      this.loadBodyContent('Bootplate.UpdateMyPasswordContent', false);
  }
  , home: function () {
    console.log("home router ");
      this.loadBodyContent('Bootplate.HomeContent', false);
  }
  // this is triggered by the isUserValidated event, purpose is to avoid loops
  , homeEvent: function () {
    console.log("homeEvent router ");
      this.loadBodyContent('Bootplate.HomeContent', false, true);
  }
  , checkLogin: function () {
    //  console.log("checkLogin router");
    // TODO if logged in go to /home, otherwise to /login
      this.loadBodyContent('Bootplate.LoginContent', true);
  }
  , login: function () {
      console.log("login router");
      this.loadBodyContent('Bootplate.LoginContent', true);
  }
  // this is triggered by the isUserValidated event, purpose is to avoid loops
  , loginEvent: function () {
      console.log("loginEvent router");
      this.loadBodyContent('Bootplate.LoginContent', true, true);
  }
  , userSignup: function () {
      console.log("userSignup router");
      this.loadBodyContent('Bootplate.UserSignupContent', false);
  }
  , forgotPassword: function () {
      console.log("forgotPassword router");
      this.loadBodyContent('Bootplate.VerifyResetRequestContent', false);
  }
  , resendEmail: function () {
      console.log("resendEmail router");
      this.loadBodyContent('Bootplate.VerifyResetRequestContent', false);
  }
  , publicBroadcastMessage: function () {
      console.log("publicBroadcastMessage router");
      this.loadBodyContent('Bootplate.PublicMessageDisplayContent', true);
  }
  , authenticate: function () {
      console.log("authenticate router");
      this.loadBodyContent('Bootplate.HomeContent', true);
  }

});










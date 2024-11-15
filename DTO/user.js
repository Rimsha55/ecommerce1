let UserRegisterDTO = function(combinedUserInfo) {
    if (!combinedUserInfo) {
      console.error("No user info provided to DTO");
      return null;
    }
  
    return {
      id: combinedUserInfo.id || null,
      name: combinedUserInfo.name || null,
      email: combinedUserInfo.email || null,
    }; 
  }
  
  
  let UserLoginDTO = function(updatedUserInfo) {
    if (!updatedUserInfo) {
      console.error("No user info provided to DTO");
      return null;
    }
    console.log(updatedUserInfo,"......................");
    return {
      id: updatedUserInfo.matchedUser.id || null,
      email: updatedUserInfo.matchedUser.email || null,
      accessToken: updatedUserInfo.accessToken || null,
    };
  }
  
  module.exports = {UserRegisterDTO,UserLoginDTO}
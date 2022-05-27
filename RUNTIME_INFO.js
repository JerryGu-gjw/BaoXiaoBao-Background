var LOGIN_CODE = {
    PARAM_ERROR : {
        CODE    :   -2,
        MSG     :   "ERROR PARMAS!"
    },
    INVALID_INVITE_ERROR:{
        CODE    :   -1,
        MSG     :   "Invalid Invitation Code!"
    },
    SUCCESS_INFO:   {
        CODE    :   0,
        MSG     :   "Success!"
    },
    MYSQL_ERROR :   {
        CODE    :   1001,
        MSG     :   "SQL ERROR, CHECK YOUR INFORMATION!",
    },
    LOGIN_ERROR :{
        CODE    :   1002,
        MSG     :   "Login Failed!"
    }
}

PROFILE_CODE = {
    
}

module.exports={
    LOGIN_CODE,
    PROFILE_CODE
}

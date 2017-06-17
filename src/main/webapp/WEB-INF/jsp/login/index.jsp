<%-- 
    Document   : index
    Created on : Jun 17, 2017, 11:08:51 PM
    Author     : Setyabudi
--%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="shortcut icon" href="${contextPath}/resources/lib/images/rekrutan/REKRUTAN.png"/>
        <title>Log In Rekrutan</title>
        <link href="${contextPath}/resources/lib/css/bootstrap.min.css" rel="stylesheet">
        <link href="${contextPath}/resources/lib/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="${contextPath}/resources/lib/css/fonts.googleapis.com.css" rel="stylesheet">
        <link href="${contextPath}/resources/lib/css/ace.min.css" rel="stylesheet">
    </head>
    <body style="background-color: rgba(19, 118, 187, 0.68)!important;">
        <div class="container">    
            <div id="loginbox" style="margin-top:120px;" class="mainbox col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="text-center">
                            <img 
                                id="img_logo" 
                                src="${contextPath}/resources/lib/images/rekrutan/REKRUTAN.png"
                                alt="Logo"
                                height="120" width="120">
                        </div>
                        <hr>
                    </div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="${contextPath}/login">
                            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                            <div class="col-md-12 form-group">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input id="rec_user_username" type="text" class="form-control" name="rec_user_username" value="" placeholder="Username">
                                </div>
                            </div>
                            <div class="col-md-12 form-group">
                                <div style="margin-bottom: 25px" class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                    <input id="rec_user_password" type="password" class="form-control" name="rec_user_password" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group">
                                <!-- Button -->
                                <div class="col-md-5">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div class="pull-right" style="margin-right:35px!important;">
                                    <button type="submit" class="btn btn-success">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>

REM @ECHO OFF

set SERVER_HOME=..
cd %SERVER_HOME%

SET ENYO=.\enyo\

IF "%NODE_HOME%"=="" GOTO :ERR

SET TOOLS=%ENYO%\tools
SET NODE="%NODE_HOME%\node.exe"
SET MINIFY=%TOOLS%\minifier\minify.js
SET DEPLOY=%TOOLS%\deploy.js

%NODE% %DEPLOY% package.js 

cp mvcApp*.html ./deploy/enyo-mvc-web-app/.
GOTO :END

:ERR
	ECHO NODE_HOME is NOT defined, needs to point to the node.exe folder
:END
PAUSE
#!/bin/bash
echo '当前选择的是：'$1
case $1 in 
    'vue-webpack') 
        cd ./frontend/vue/webpack
        webpack --watch
        ;;
    'react-webpack')
        cd ./frontend/react/webpack
        webpack --watch
        # webpack-dev-server --hot --inline --watch
        ;;

esac
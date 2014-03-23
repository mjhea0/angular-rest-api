"use strict";

exports.index = function(req,res){
  res.render("index");
}

exports.api = function(req, res){
  res.send("wheee!", 200);
};

exports.ping = function(req, res){
  res.send("pong!", 200);
};

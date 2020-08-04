'use strict';

const mocha = require('mocha');
const chai = require('chai');
const should = chai.should();

const handler = require('../apl/adaptor/handler');

// 「矢印関数:()=>（別名「ラムダ」）をMochaに渡すことは推奨されないため、使用される通常の関数:function()
// 理由は下記の通り。
// Mochaでは、describe および it ブロックで矢印関数を使用しないことが重要です。
// これまでに、矢印関数は非常に簡単に記述できるため、矢印関数が好きになるでしょう。
// しかし、Mochaはこれらの関数を、this Mochaに役立つ関数を含むオブジェクトで呼び出します。
// 矢印関数はthisオブジェクトの設定を回避するため、Mochaは機能しなくなります。
// Mochaはと ブロックに通常の関数を必要 describe とし itますが、これらの関数内で矢印関数を使用できます。
describe("The handler function", function()  {
    it("returns a message", function() {
        handler.hello(undefined, undefined, function(error, response){
            let body = JSON.parse(response.body);
            body.message.should.be.equal('Go Serverless v1.0! Your function executed successfully!');
        });
    });
});

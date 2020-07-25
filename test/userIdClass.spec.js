'use strict';

const mocha = require('mocha');
const chai = require('chai');
const should = chai.should();

const UserIdClass = require('../application/userIdGenerator/userIdClass');
const uuidV1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1]{1}[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4]{1}[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/;

// 「矢印関数:()=>（別名「ラムダ」）をMochaに渡すことは推奨されないため、使用される通常の関数:function()
// 理由は下記の通り。
// Mochaでは、describe および it ブロックで矢印関数を使用しないことが重要です。
// これまでに、矢印関数は非常に簡単に記述できるため、矢印関数が好きになるでしょう。
// しかし、Mochaはこれらの関数を、this Mochaに役立つ関数を含むオブジェクトで呼び出します。
// 矢印関数はthisオブジェクトの設定を回避するため、Mochaは機能しなくなります。
// Mochaはと ブロックに通常の関数を必要 describe とし itますが、これらの関数内で矢印関数を使用できます。

describe("The UserIdClass method", function() {
    it("returns a userId.uuidV1", function() {
        const userId = new UserIdClass(new Date().getTime(), null);
        const uuid = userId.uuidV1();
        console.log(`uuidV1=${uuid}`);
        uuid.should
        .be.a('string')
        .and.match(uuidV1Regex);
    });
    it("returns a userId.uuidV4", function() {
        const userId = new UserIdClass(new Date().getTime(), null);
        const uuid = userId.uuidV4();
        console.log(`uuidV4=${uuid}`);
        uuid.should
        .be.a('string')
        .and.match(uuidV4Regex);
    });
});
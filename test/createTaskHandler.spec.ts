'use strict';

// import * as mocha from 'mocha';

import * as createTaskHandler from '../apl/adaptor/createTaskHandler';

import { expect } from 'chai';

// 「矢印関数:()=>（別名「ラムダ」）をMochaに渡すことは推奨されないため、使用される通常の関数:function()
// 理由は下記の通り。
// Mochaでは、describe および it ブロックで矢印関数を使用しないことが重要です。
// これまでに、矢印関数は非常に簡単に記述できるため、矢印関数が好きになるでしょう。
// しかし、Mochaはこれらの関数を、this Mochaに役立つ関数を含むオブジェクトで呼び出します。
// 矢印関数はthisオブジェクトの設定を回避するため、Mochaは機能しなくなります。
// Mochaはと ブロックに通常の関数を必要 describe とし itますが、これらの関数内で矢印関数を使用できます。
describe('The createTaskHandler function', function()  {
    it('returns detail=ok', function() {
        createTaskHandler.handler(undefined, undefined, function(response){
            console.log(`response.body=${response.body}`);
            const body = JSON.parse(response.body);
            expect(body.detail).should.be.equal('ok');
        });
    });
});

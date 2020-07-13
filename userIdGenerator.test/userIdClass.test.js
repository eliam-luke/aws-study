'use strict';

const mocha = require('mocha');
const chai = require('chai');
const should = chai.should();

const UserIdClass = require('../userIdGenerator/userIdClass');
const uuidV1Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1]{1}[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4]{1}[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/;

describe("The UserIdClass method", () => {
    it("returns a userId.uuidV1", () => {
        const userId = new UserIdClass(new Date().getTime(), null);
        const uuid = userId.uuidV1();
        console.log(`uuidV1=${uuid}`);
        uuid.should
        .be.a('string')
        .and.match(uuidV1Regex);
    });
    it("returns a userId.uuidV4", () => {
        const userId = new UserIdClass(new Date().getTime(), null);
        const uuid = userId.uuidV4();
        console.log(`uuidV4=${uuid}`);
        uuid.should
        .be.a('string')
        .and.match(uuidV4Regex);
    });
});
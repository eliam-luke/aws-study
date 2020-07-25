'use strict';

class TokenInfo {
    // トークン
    token;
    // スコップ
    scope;
    // 有効期限
    expirationAt;
    // 失効フラグ
    revokeFlag;
    // 登録日時
    createdAt;
    // 登録者
    createdBy;
    // 更新日時
    updatedAt;
    // 更新者
    updatedBy;
    // 日本時間タイムスタンプ
    timestampJST;
}

module.exports = TokenInfo;

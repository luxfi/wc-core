"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wc_utils_1 = require("@luxwallet/wc-utils");
class SessionStorage {
    constructor(storageId = "walletconnect") {
        this.storageId = storageId;
    }
    getSession() {
        let session = null;
        const json = (0, wc_utils_1.getLocal)(this.storageId);
        if (json && (0, wc_utils_1.isWalletConnectSession)(json)) {
            session = json;
        }
        return session;
    }
    setSession(session) {
        (0, wc_utils_1.setLocal)(this.storageId, session);
        return session;
    }
    removeSession() {
        (0, wc_utils_1.removeLocal)(this.storageId);
    }
}
exports.default = SessionStorage;
//# sourceMappingURL=storage.js.map
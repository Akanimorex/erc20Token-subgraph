import { BigInt } from "@graphprotocol/graph-ts";
import { Account } from "../generated/schema";


export function loadOrCreateUser(id: string): Account {
    let account = Account.load(id);
    if (account === null) {
        account = new Account(id);
        account.balance = BigInt.fromI32(0);
        account.save();
    }

    return account;
}
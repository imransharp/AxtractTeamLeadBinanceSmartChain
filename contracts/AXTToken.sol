pragma solidity >=0.4.22 <0.9.0;

import './interfaces/erc-20.sol';
import './lib/safemath.sol';
import './callback/callback.sol';

contract AXTToken is ERC20Interface, SafeMath {
    string public symbol; //state varibles store in the blockchain
    string public  name;   // name of Token
    uint8 public decimals; // number of decimal points to represent token value
    uint public _totalSupply; // total number of tokens

    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    constructor() {
        symbol = "AXTT";          //enter your token symbol here
        name = "AXTRACT TOKEN TEST";       // give a name to your token
        decimals = 6;               //setting a decimal points
        _totalSupply = 400000000*10**6;     //creating 400 million token
        balances[0x246F4b668dd7fE55888EF50aF9F4aeF6C39d4Bdc] = _totalSupply; //setting total supply balances to 
        emit Transfer(address(0), 0x246F4b668dd7fE55888EF50aF9F4aeF6C39d4Bdc, _totalSupply);  
    }

    function totalSupply() public override returns (uint) {
        return _totalSupply  - balances[address(0)];
    }

    function balanceOf(address tokenOwner) public override returns (uint balance) {
        return balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public override returns (bool success) {
        balances[msg.sender] = safeSub(balances[msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    function approve(address spender, uint tokens) public override returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    function transferFrom(address from, address to, uint tokens) public override returns (bool success) {
        balances[from] = safeSub(balances[from], tokens);
        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);
        balances[to] = safeAdd(balances[to], tokens);
        emit Transfer(from, to, tokens);
        return true;
    }

    function allowance(address tokenOwner, address spender) public override returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }

    function approveAndCall(address spender, uint tokens, bytes memory data) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        ApproveAndCallFallBack(spender).receiveApproval(msg.sender, tokens, address(this), data);
        return true;
    }

    fallback() external payable {}
}
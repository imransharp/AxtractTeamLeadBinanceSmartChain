pragma solidity >=0.4.22 <0.9.0;

abstract contract ERC20Interface {
    function totalSupply() external virtual returns (uint);
    function balanceOf(address tokenOwner) external virtual returns (uint balance);
    function allowance(address tokenOwner, address spender) external virtual returns (uint remaining);
    function transfer(address to, uint tokens) external virtual returns (bool success);
    function approve(address spender, uint tokens) external virtual returns (bool success);
    function transferFrom(address from, address to, uint tokens) external virtual returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
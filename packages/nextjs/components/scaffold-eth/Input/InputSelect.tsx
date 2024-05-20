import React, { ChangeEvent, useCallback } from "react";
import { bbSupportedERC20Tokens } from "../../../../buildbear/constants.mjs";
import buildBearSandbox from "../../../sandbox.json";

const InputSelect = ({ placeholder, onChange }: any) => {
  const erc20Tokens = buildBearSandbox ? bbSupportedERC20Tokens[buildBearSandbox.forkingChainId] : {};
  const erc20Options = Object.keys(erc20Tokens).map(tokenSymbol => ({
    value: erc20Tokens[tokenSymbol]?.address,
    label: tokenSymbol,
  }));

  const updateTokenAddress = useCallback(
    (newValue: ChangeEvent<HTMLInputElement>) => {
      onChange(newValue.target.value as string);
      // console.log(newValue.target.value);
    },
    [onChange],
  );

  return (
    <div>
      {" "}
      <select
        className="select select-bordered focus:outline-none focus:bg-transparent  focus:text-gray-400 h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium text-gray-400 bg-base-200"
        onChange={value => updateTokenAddress(value)}
      >
        <option className="text-gray-400 bg-base-200" value="">
          Select ERC-20 Token: [{placeholder}]
        </option>
        {erc20Options.map(option => (
          <option className="text-gray-400 bg-base-200" key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;

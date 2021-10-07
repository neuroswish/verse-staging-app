import { ethers } from "ethers"; // Ethers
import { createContainer } from "unstated-next"; // Global state provider
import { NETWORK } from "../utils/constants";
import { useState, useMemo, useCallback, useEffect } from "react"; // Local state management
import { Web3Provider } from "@ethersproject/providers"; // Providers
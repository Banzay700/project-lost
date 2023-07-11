import {
  validateAccessToken,
  validateRefreshToken,
} from "../tokens/validateTokens.js";

export const authMiddlewareAccessToken = async (req, res, next) => {
  try {
    const headerAuthorization = req.headers.authorization;

    if (!headerAuthorization) {
      throw new Error("No access, not authorized");
    }

    const accessToken = headerAuthorization.split(" ")[1];

    if (!accessToken) {
      throw new Error("No access, not authorized");
    }

    const userData = await validateAccessToken(accessToken);

    if (!userData) {
      throw new Error("No access, not authorized");
    }

    req.authUser = userData;

    next();
  } catch (err) {
    res.status(401).json({ message: "No access, not authorized" });
  }
};

export const authMiddlewareRefreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      throw new Error("No access, not authorized");
    }

    const userData = await validateRefreshToken(refreshToken);

    if (!userData) {
      throw new Error("No access, not authorized");
    }

    req.authUser = userData;

    next();
  } catch (err) {
    res.status(401).json({ message: "No access, not authorized" });
  }
};

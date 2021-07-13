import { Request, Response, NextFunction } from "express";
import { nextTick } from "process";

const isLoggegIn = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

const isNotLoggedin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated) {
    next();
  } else {
    res.status(401).send("로그인한 사용자는 접근 할 수 없습니다.");
  }
};

export { isLoggegIn, isNotLoggedin };

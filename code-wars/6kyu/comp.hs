module Codewars.Kata.Compare where

import           Data.List (delete)

comp :: [Integer] -> [Integer] -> Bool
comp as bs = uncurry (&&) $ null <$> foldr fn (True, (^ 2) <$> as) bs
  where
    fn :: Integer -> (Bool, [Integer]) -> (Bool, [Integer])
    fn n (acc, as') = (n `elem` as' && acc, delete n as')

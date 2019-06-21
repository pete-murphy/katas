{-# LANGUAGE ViewPatterns #-}

module NextSmaller where

import           Data.List        (permutations)
import           Data.Maybe       (catMaybes)
import           Data.Traversable
import           Text.Read        (readMaybe)

parseInt :: String -> Maybe Integer
parseInt ('0':_) = Nothing
parseInt xs      = readMaybe xs

maximumMaybe :: (Ord a) => [a] -> Maybe a
maximumMaybe [] = Nothing
maximumMaybe xs = Just $ maximum xs

-- This times out
nextSmaller' :: Integer -> Maybe Integer
nextSmaller' n =
  maximumMaybe $ filter (< n) $ catMaybes $ parseInt <$> permutations (show n)

-- So does this
nextSmaller'' :: Integer -> Maybe Integer
nextSmaller'' n = foldr foo Nothing $ permutations (show n)
  where
    foo :: String -> Maybe Integer -> Maybe Integer
    foo (parseInt -> xs) acc
      | xs > acc && xs < Just n = xs
      | otherwise = acc

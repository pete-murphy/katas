module Difference where

difference :: Eq a => [a] -> [a] -> [a]
difference = foldr (\b acc -> filter (/= b) acc)

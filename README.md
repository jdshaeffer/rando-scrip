# 🤓 rando-scrip 🤓

This is a simple Next.js project with a little experiment in statistics. It finds a weighted-random scripture in the Latter-day Saint canon. I believe it's the most accurate way of finding a true random scripure.

It goes like:
Collection (weighted by # of pages), Book (weighted by # of pages), Chapter (weighted by # of verses), Verse (random selection from total verses in chapter)

## insights
overall distribution (in terms of # of pages):
- Old Testament: 47.97%
- New Testament: 16.33%
- Book of Mormon: 21.47%
- Doctrine & Covenants: 11.75%
- Pearl of Great Price: 2.48%

## acknowledgments
thanks to @maerics' answer on https://stackoverflow.com/questions/8435183/generate-a-weighted-random-number for the rejection sampling algo

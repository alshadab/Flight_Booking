এই মডিউলে আমরা দেখে ফেললাম কিভাবে আমরা React প্রোজেক্ট এ রিডাক্স ব্যবহার করে State ম্যানেজ করতে পারি। এই প্রোজেক্টে যা যা দেখানো হয়েছে, তার উপর ভিত্তি করে আপনাদের জন্যে একটি এসাইনমেন্ট তৈরি করা হয়েছে। এই এসাইনমেন্ট এর জন্যে আমরা HTML/CSS ব্যবহার করে একটি template তৈরি করে দিয়েছি। সেই template টি কে Rect এ কনভার্ট করে সেখানে ‘react-redux’ প্যাকেজ ব্যবহার করতে হবে State ম্যানেজ করতে হবে।

**উল্লেখ্য যে, এসাইনমেন্ট এর ডিজাইনে কোন ধরনের পরিবর্তন করা যাবে না এবং HTML template এ দেয়া কোনো বাটন বা এলিমেন্ট এর ক্লাস বা আইডি পরিবর্তন করা যাবে না। সেই ক্লাস বা আইডি দিয়েই আপনাকে এসাইনমেন্টটি সম্পন্ন করতে হবে। অন্যথায় এসাইনমেন্টটি গ্রহনযোগ্য হবে না এবং এসাইনমেন্ট এর কোনো মার্ক নাও পেতে পারেন।**

## এসাইনমেন্ট এ আপনাকে যা যা করতে হবেঃ

✓ প্রজেক্টটি React-redux দিয়ে করতে হবে।

✓ Destination From, Destination To, Journey Date, Guests, Class সবগুলো ফিলাপ করে Book বাটনে ক্লিক করলে ডাটা গুলো Redux store এ সেভ হবে ।

✓ Redux store থেকে ডাটা গুলো নিয়ে এসে টেবিলে দেখাতে হবে।

✓ সর্বোচ্চ ৩ টি ডাটা এড করলে Book বাটন ডিজেবল হয়ে যাবে। এখানে আপনাকে ভ্যালিডেশন করতে হবে। অর্থাৎ সর্বোচ্চ ৩ টি রো এড করা যাবে, ৪র্থ ডেটা এড করা যাবে না ।

✓ টেবিলে থাকা ডিলেট বাটন এ ক্লিক করলে row টি ডিলেট হয়ে যাবে, সেই সাথে Redux store থেকেও ডাটা ডিলেট হয়ে যাবে।

## কিভাবে সাবমিট করবেন:

সবচেয়ে সহজে বুঝার জন্য [এই ভিডিওটি](https://learnwithsumit.com/courses/think-in-a-redux-way/how-to-submit-assignment) দেখে ফেলুন।

এসাইনমেন্টে আপনাকে মাত্র দুইটা জিনিস সাবমিট করতে হবে।

1. **GitHub private repository link:** অবশ্যই সঠিক গিটহাব রিপোজিটরি লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা।

2. **Live site link:** নেটলিফাইতে সাইট হোস্ট করে সাইটের লাইভ লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা। নেটলিফাইতে কি ভাবে হোস্ট করতে হয় তা আপনি না জানলে [এইখানে ক্লিক](https://learnwithsumit.com/courses/think-in-a-redux-way/how-to-submit-assignment) করে দেখে নিতে পারেন।

**সাবমিট একবারই করতে পারবেন তাই ভালো করে দেখে সাবমিট করবেন।**

## GitHub private repository কিভাবে তৈরি করবেন:

Github Private repositoty তৈরি করতে [এইখানে ক্লিক করুন](https://classroom.github.com/a/C6Q8NSOS) অথবা ব্রাউজারে এই লিংকে **https://classroom.github.com/a/C6Q8NSOS** ভিজিট করুন। লিংকে যাওয়ার পরে **Accept this assignment** এ ক্লিক করুন। সর্বোচ্চ ১মিনিট পরে পেইজটি রিলোড দিলে আপনি আপনার রিপোজেটরি লিংক পেয়ে যাবেন। মনে রাখবেন, আপনাকে এই লিংকটি আমাদের প্লাটফর্মে সাবমিট করতে হবে আমাদের কাছে। না বুঝলে উপরে বলা ভিডিও টিউটোরিয়ালটি দেখে নিন।

## Assignment এর জন্য প্রয়োজনীয় template HTML এবং server কোথায় পাবেন:

প্রতিটি assignment এর সাথে প্রয়োজনীয় HTML template এবং "server" folder (API) আমরা দিয়ে দিয়েছি যেন আপনাকে HTML template এবং সার্ভার সাইড কাজ নিয়ে সময় নষ্ট না করতে হয়। কোর্সের GitHub repository এর সংশ্লিষ্ট ব্রাঞ্চে গেলেই আপনারা 'html' folder এর ভিতর HTML template পাবেন। একই ভাবে 'server' folder এ server API পেয়ে যাবেন। না বুঝলে [এইখানে ক্লিক](https://learnwithsumit.com/courses/think-in-a-redux-way/how-to-submit-assignment) করে টিউটোরিয়াল দেখে নিতে পারেন।

## এসাইনমেন্ট মার্কস পলিসি:

আপনি নির্ধারিত সময়ে এসাইনমেন্ট জমা দিলে এবং সব কিছু সঠিকভাবে করলে সম্পূর্ণ মার্ক পাবেন। এর পরে জমা দিলে আপনার মার্ক নিচের নিয়মে কাটা যাবে -

1. ডেডলাইনের পরে এক ঘণ্টার মধ্যে জমা দিলে 10% মার্ক কাটা যাবে।
2. ডেডলাইনের পরে এক ঘণ্টার বেশি কিন্তু 24 ঘণ্টার মধ্যে জমা দিলে 30% মার্ক কাটা যাবে।
3. ডেডলাইনের পরে 24 ঘণ্টার বেশি পরে জমা দিলে 50% মার্ক কাটা যাবে।
4. কোর্স ডিউরেশনের পরে আমরা এসাইনমেন্ট গ্রহণ করবো না।

অবশ্যই কোর্স চলাকালিন সময়ে এসাইনমেন্ট জমা দিতে হবে। কোর্সের ডিউরেশন শেষ হয়ে গেলে তার পরে আপনি এসাইনমেন্টে জমা দিলে এসাইনমেন্টের মার্ক পাবেন না।

## সাবমিট করার পর কোড পরিবর্তন:

আপনি ভেবে নিতে পারেন আপনি ওয়েবসাইটে সঠিক সময়ে এসাইনমেন্ট সাবমিট করে নীরবে পরে গিটহাবে কোড পুশ করতে থাকবেন! আপনার গিটহাবের সর্বশেষ কমিট দেখলেই আমরা বুঝতে পারবো আপনি কখন কোড আপডেট করেছেন। সে অনুযায়ী আমরা আপনার মার্ক কেটে নিবো। তাই এসাইনমেন্ট এর সময় পার হবার পরে আমরা আশা করবো আপনি চালাকি করে আর কোড পুশ করবেন না আপনার রিপোজিটরিতে। এটা করলে আপনার সম্পূর্ণ মার্ক কাটা যেতে পারে।

## এসাইনমেন্ট মার্কস কবে পাবেন:

আমরা সর্বোচ্চ ৭ দিনের ভিতরে এসাইনমেন্টের মার্ক দিয়ে দেওয়ার চেষ্টা করবো। ক্ষেত্র বিশেষে একটু দেরি হতে পারে কারো কারো মার্ক পেতে।

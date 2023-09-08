const imageUrls = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
    "https://plus.unsplash.com/premium_photo-1693857181946-ad3e5176098e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692071097529-320eb2b32292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1693934189611-cfba028d2225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://plus.unsplash.com/premium_photo-1692441579282-6a106b012a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://plus.unsplash.com/premium_photo-1683121766961-3356757f82db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1693907624280-3ab0fcf5016f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://plus.unsplash.com/premium_photo-1664699099341-b7c4229a8d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  
  const randomUsernames = [
    'CoolCat82',
    'JazzMaster24',
    'SoccerStar007',
    'MountainHiker55',
    'BookLover123',
    'AdventureSeeker19',
    'FoodieGuru',
    'TechWizard96',
    'NatureLover77',
    'MusicFanatic44',
    'TravelBug88',
    'MovieBuff55',
    'FitnessFreak101',
    'ArtisticSoul72',
    'ScienceGeek123',
    'Fashionista22',
    'GamerPro99',
    'AnimalLover67',
    'CoffeeAddict42',
    'StarryNightDreamer'
  ];
export const generateRandomPost = () => {
const user = randomUsernames[Math.floor(Math.random() * randomUsernames.length)];
const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
const likes = Math.floor(Math.random() * 100); // Random number of likes
const timestamp = `${Math.floor(Math.random() * 7)}d`; // Random timestamp (e.g., "2d" for 2 days ago)

return {
    user,
    postImage: randomImageUrl,
    likes,
    timestamp,
    type: 'post'
};
};
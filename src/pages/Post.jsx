import React from 'react';

import PostCard from '../components/PostCard';

const POSTS = [
  {
    id: 'sample1',
    title: '湘南で波に乗ろうぜ！',
    date: '2019-07-01 00:00:00',
    image: 'https://as2.ftcdn.net/jpg/01/91/70/39/500_F_191703953_mVmLBFzKyqx2teY5bVV8BSUlHhVSy09b.jpg',
    user: {
      id: 'test1',
      name: 'マイケル',
      experience: '1年',
      image: 'https://t4.ftcdn.net/jpg/02/00/58/15/240_F_200581556_r9J97bDJutKyK92qHmDIBK5SXO2yMEJ3.jpg',
    },
  },
  {
    id: 'sample2',
    title: '湘南で波に乗ろうぜ2！',
    date: '2019-07-10 00:00:00',
    image: 'https://t3.ftcdn.net/jpg/01/66/73/90/240_F_166739045_OzQpmKye0MQBbmlrPWSp9AC5ZDlg7EyL.jpg',
    user: {
      id: 'test2',
      name: '吉田',
      experience: '2年',
      image: 'https://t4.ftcdn.net/jpg/01/90/53/23/240_F_190532347_BGKhQ23I8FZUbntxF8rBIMSYvK1JrKvs.jpg',
    },
  },
  {
    id: 'sample3',
    title: '湘南で波に乗ろうぜ2！',
    date: '2019-07-10 00:00:00',
    image: 'https://t3.ftcdn.net/jpg/01/66/73/90/240_F_166739045_OzQpmKye0MQBbmlrPWSp9AC5ZDlg7EyL.jpg',
    user: {
      id: 'test2',
      name: '吉田',
      experience: '2年',
      image: 'https://t4.ftcdn.net/jpg/01/90/53/23/240_F_190532347_BGKhQ23I8FZUbntxF8rBIMSYvK1JrKvs.jpg',
    },
  },
  {
    id: 'sample4',
    title: '飲みに乗りたい！',
    date: '2019-07-19 00:00:00',
    image: 'https://t3.ftcdn.net/jpg/01/94/71/84/240_F_194718416_FAYLauHdTSCCwa1VqSFK4zR8msw9EwUJ.jpg',
    user: {
      id: 'test1',
      name: 'マイケル',
      experience: '1年',
      image: 'https://t4.ftcdn.net/jpg/02/00/58/15/240_F_200581556_r9J97bDJutKyK92qHmDIBK5SXO2yMEJ3.jpg',
    },
  },
  {
    id: 'sample5',
    title: '湘南で波に乗ろうぜ2！',
    date: '2019-07-10 00:00:00',
    image: 'https://t3.ftcdn.net/jpg/01/66/73/90/240_F_166739045_OzQpmKye0MQBbmlrPWSp9AC5ZDlg7EyL.jpg',
    user: {
      id: 'test2',
      name: '吉田',
      experience: '2年',
      image: 'https://t4.ftcdn.net/jpg/01/90/53/23/240_F_190532347_BGKhQ23I8FZUbntxF8rBIMSYvK1JrKvs.jpg',
    },
  },
]

const Post = () => {

  return (
    <div className="container is-fluid">
      <div className="columns is-desktop is-multiline">
        {
          POSTS.map(post => (
            <div className="column is-one-quarter" key={post.id}>
              <PostCard post={post} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Post;

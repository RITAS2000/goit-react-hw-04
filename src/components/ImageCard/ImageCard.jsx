import css from './ImageCard.module.css';

export default function ImageCard({ src, alt_description, onClick }) {
  return (
    <>
      <img
        src={src}
        alt={alt_description}
        className={css.img}
        onClick={onClick}
      />
    </>
  );
}
// alt_description
// :
// "orange flowers"
// alternative_slugs
// :
// {en: 'orange-flowers-IicyiaPYGGI', es: 'flores-de-naranjo-IicyiaPYGGI', ja: 'オレンジ色の花-IicyiaPYGGI', fr: 'fleurs-oranges-IicyiaPYGGI', it: 'fiori-darancio-IicyiaPYGGI', …}
// asset_type
// :
// "photo"
// blur_hash
// :
// "L_P$]vj[ayof?wj[j[j[M_ayayf6"
// breadcrumbs
// :
// []
// color
// :
// "#f3f3f3"
// created_at
// :
// "2016-06-05T17:07:21Z"
// current_user_collections
// :
// []
// description
// :
// null
// height
// :
// 3264
// id
// :
// "IicyiaPYGGI"
// liked_by_user
// :
// false
// likes
// :
// 9850
// links
// :
// {self: 'https://api.unsplash.com/photos/orange-flowers-IicyiaPYGGI', html: 'https://unsplash.com/photos/orange-flowers-IicyiaPYGGI', download: 'https://unsplash.com/photos/IicyiaPYGGI/download?i…NlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzQ1MDk3Mjk4fDA', download_location: 'https://api.unsplash.com/photos/IicyiaPYGGI/downlo…NlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzQ1MDk3Mjk4fDA'}
// promoted_at
// :
// "2016-06-05T17:07:21Z"
// slug
// :
// "orange-flowers-IicyiaPYGGI"
// sponsorship
// :
// null
// topic_submissions
// :
// {macro-moments: {…}, nature: {…}, spring: {…}, wallpapers: {…}}
// updated_at
// :
// "2025-04-19T21:01:47Z"
// urls
// :
// full
// :
// "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDAyOTd8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzQ1MDk3Mjk4fDA&ixlib=rb-4.0.3&q=85"
// raw
// :
// "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixid=M3w3NDAyOTd8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzQ1MDk3Mjk4fDA&ixlib=rb-4.0.3"
// regular
// :
// "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDAyOTd8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzQ1MDk3Mjk4fDA&ixlib=rb-4.0.3&q=80&w=1080"
// small
// :
// "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDAyOTd8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzQ1MDk3Mjk4fDA&ixlib=rb-4.0.3&q=80&w=400"
// small_s3
// :
// "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1465146344425-f00d5f5c8f07"
// thumb
// :
// "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDAyOTd8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzQ1MDk3Mjk4fDA&ixlib=rb-4.0.3&q=80&w=200"
// [[Prototype]]
// :
// Object
// user
// :
// {id: 'ZgApAggtbLg', updated_at: '2025-03-12T03:11:22Z', username: 'henry_be', name: 'Henry Be', first_name: 'Henry', …}
// width
// :
// 4928

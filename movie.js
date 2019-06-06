/**
 * Created by lwq11 on 2019/6/6.
 */
$(function () {
    $("button").click(function(){
        var title = $("input").val();
        var frame=$("#movie-frame");
        $.get("./movie.php?title="+title,function(data,status){
            // 将json字符串转化为JavaScript Object
            var response=JSON.parse(data);
            var movie=response.result;
            if (movie.length<1){
                alert("暂时查不到该影视信息，请稍后再尝试！");
            }else{
                frame.empty();
                var rating=movie[0].rating;
                var release_date=movie[0].release_date;
                var genres=movie[0].genres;
                var runtime=movie[0].runtime;
                var language=movie[0].language;
                var title=movie[0].title;
                var poster=movie[0].poster;
                var writers=movie[0].writers;
                var film_locations=movie[0].film_locations;
                var directors=movie[0].directors;
                var plot_simple=movie[0].plot_simple;
                var also_known_as=movie[0].also_known_as;
                var actors=movie[0].actors;
                if (poster==''){
                    poster='./error.jpg';
                }
                if (rating<0){
                    rating='无';
                }
                var str='<div class="movie-left">'+
                    '<img class="img-movie" src="'+poster+'">'+
                    '</div>'+
                    '<div class="movie-right">'+
                    '<h2>'+title+'</h2>'+
                    '<p>简    介： '+plot_simple+'</p>'+
                    '<p>演    员： '+actors+'</p>'+
                    '<p>发布时间： '+release_date+'</p>'+
                    '<p>评    分： '+rating+'</p>'+
                    '<p>类    型： '+genres+'</p>'+
                    '<p>时    长： '+runtime+'</p>'+
                    '<p>语    言： '+language+'</p>'+
                    '<p>国    家： '+film_locations+'</p>'+
                    '<p>作    者： '+writers+'</p>'+
                    '<p>导    演： '+directors+'</p>'+
                    '<p>别    名： '+also_known_as+'</p>'+
                    '</div>';
                frame.append(str);
            }
        });
    });
})
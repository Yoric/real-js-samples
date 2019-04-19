/**
 * TOPランキングタブ用
 */
function chgTopRankingMenu(menu){
    switch(menu)
    {
        case 'top_ranking_dayly':
            $("#top_ranking_dayly").css('display', 'block');
            $("#top_ranking_weekly").css('display', 'none');
            $("#top_ranking_monthly").css('display', 'none');
            break;
        case 'top_ranking_weekly':
            $("#top_ranking_dayly").css('display', 'none');
            $("#top_ranking_weekly").css('display', 'block');
            $("#top_ranking_monthly").css('display', 'none');
            break;
        case 'top_ranking_monthly':
            $("#top_ranking_dayly").css('display', 'none');
            $("#top_ranking_weekly").css('display', 'none');
            $("#top_ranking_monthly").css('display', 'block');
            break;
        default:
    }
}

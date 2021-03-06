/**
 * Created by Sarunas on 2015.02.06.
 */

app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase && text) text = text.replace(new RegExp('('+phrase+')', 'gi'),
            '<span class="highlighted">$1</span>')

        return $sce.trustAsHtml(text)
    }
});
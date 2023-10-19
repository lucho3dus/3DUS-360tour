(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"data":{"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"rate":1},"locales":{"en":"locale/en.txt"},"history":{},"name":"Player1858"},"scripts":{"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoForward":TDV.Tour.Script.historyGoForward,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoBack":TDV.Tour.Script.historyGoBack,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizStart":TDV.Tour.Script.quizStart,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setValue":TDV.Tour.Script.setValue,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"mixObject":TDV.Tour.Script.mixObject,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"translate":TDV.Tour.Script.translate,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clone":TDV.Tour.Script.clone,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizFinish":TDV.Tour.Script.quizFinish,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"init":TDV.Tour.Script.init,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setLocale":TDV.Tour.Script.setLocale,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeJS":TDV.Tour.Script.executeJS,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"createTween":TDV.Tour.Script.createTween,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"downloadFile":TDV.Tour.Script.downloadFile,"registerKey":TDV.Tour.Script.registerKey,"existsKey":TDV.Tour.Script.existsKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"resumePlayers":TDV.Tour.Script.resumePlayers,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMapLocation":TDV.Tour.Script.setMapLocation,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openLink":TDV.Tour.Script.openLink,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlays":TDV.Tour.Script.getOverlays,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getKey":TDV.Tour.Script.getKey,"getPixels":TDV.Tour.Script.getPixels,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowScore":TDV.Tour.Script.quizShowScore},"gap":10,"layout":"absolute","scrollBarMargin":2,"start":"this.init()","children":["this.MainViewer"],"height":"100%","width":"100%","watermark":false,"hash": "97af3cbf67bb073347675be21778dc5e835b8272a487702a637a94c490cf571c", "definitions": [{"thumbnailUrl":"media/panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7_t.jpg","label":trans('panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7.label'),"data":{"label":"Sheraton Augusta-King 360_3"},"overlays":["this.overlay_520E2438_4970_6DEB_41AC_3B0EB065004A","this.overlay_552F76A6_4973_AAE7_41AC_F0D174BB471F"],"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C","yaw":119.83,"distance":2.22,"data":{"overlayID":"overlay_552F76A6_4973_AAE7_41AC_F0D174BB471F"},"backwardYaw":159.51,"select":"this.overlay_552F76A6_4973_AAE7_41AC_F0D174BB471F.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","panorama":"this.panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895","yaw":10.73,"distance":2.24,"data":{"overlayID":"overlay_520E2438_4970_6DEB_41AC_3B0EB065004A"},"backwardYaw":-162.9,"select":"this.overlay_520E2438_4970_6DEB_41AC_3B0EB065004A.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":130,"hfov":360,"id":"panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7_0/{face}/0/{row}_{column}.jpg","tags":["ondemand","mobilevr2gen"],"colCount":18,"height":1536,"rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12,"height":1024,"rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"height":512,"rowCount":1,"width":3072}]}}]},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7_camera","initialSequence":"this.sequence_5B2A2594_4970_AEBB_41C6_640C14B483BA","enterPointingToHorizon":true},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278","camera":"this.panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","media":"this.panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895","camera":"this.panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","media":"this.panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7","camera":"this.panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","media":"this.panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C","camera":"this.panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"id":"mainPlayList"},{"thumbnailUrl":"media/panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278_t.jpg","label":trans('panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278.label'),"data":{"label":"Sheraton Augusta-King 360_1"},"overlays":["this.overlay_51828FF9_497F_9A6D_41D2_2809BCE47A0A"],"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895","yaw":-154.36,"distance":2.81,"data":{"overlayID":"overlay_51828FF9_497F_9A6D_41D2_2809BCE47A0A"},"backwardYaw":12.11,"select":"this.overlay_51828FF9_497F_9A6D_41D2_2809BCE47A0A.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":130,"hfov":360,"id":"panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278_0/{face}/0/{row}_{column}.jpg","tags":["ondemand","mobilevr2gen"],"colCount":18,"height":1536,"rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12,"height":1024,"rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"height":512,"rowCount":1,"width":3072}]}}]},{"thumbnailUrl":"media/panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895_t.jpg","label":trans('panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895.label'),"data":{"label":"Sheraton Augusta-King 360_2"},"overlays":["this.overlay_50B3A4C6_4971_AEA7_41B0_C6D0C52704C9","this.overlay_56D4F2B9_4970_AAED_4170_A5421DEE9AB5"],"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278","yaw":12.11,"distance":2.82,"data":{"overlayID":"overlay_50B3A4C6_4971_AEA7_41B0_C6D0C52704C9"},"backwardYaw":-154.36,"select":"this.overlay_50B3A4C6_4971_AEA7_41B0_C6D0C52704C9.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","panorama":"this.panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7","yaw":-162.9,"distance":1.98,"data":{"overlayID":"overlay_56D4F2B9_4970_AAED_4170_A5421DEE9AB5"},"backwardYaw":10.73,"select":"this.overlay_56D4F2B9_4970_AAED_4170_A5421DEE9AB5.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":130,"hfov":360,"id":"panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895_0/{face}/0/{row}_{column}.jpg","tags":["ondemand","mobilevr2gen"],"colCount":18,"height":1536,"rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12,"height":1024,"rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"height":512,"rowCount":1,"width":3072}]}}]},{"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","displayPlaybackBar":true},{"thumbnailUrl":"media/panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C_t.jpg","label":trans('panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C.label'),"data":{"label":"Sheraton Augusta-King 360_4"},"overlays":["this.overlay_524A67B3_4970_AAFD_41B3_26F83CAD72CB"],"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_5B2ADDD5_4970_BEA5_41BE_5E9C6F7808B7","yaw":159.51,"distance":1.9,"data":{"overlayID":"overlay_524A67B3_4970_AAFD_41B3_26F83CAD72CB"},"backwardYaw":119.83,"select":"this.overlay_524A67B3_4970_AAFD_41B3_26F83CAD72CB.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":130,"hfov":360,"id":"panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C_0/{face}/0/{row}_{column}.jpg","tags":["ondemand","mobilevr2gen"],"colCount":18,"height":1536,"rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12,"height":1024,"rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"height":512,"rowCount":1,"width":3072}]}}]},{"playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarBottom":5,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowOpacity":0.7,"progressBorderRadius":2,"vrPointerSelectionTime":2000,"subtitlesFontFamily":"Arial","progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","width":"100%","progressBottom":10,"height":"100%","toolTipFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","propagateClick":false,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingLeft":6,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowOpacity":1,"progressHeight":2,"playbackBarBorderRadius":0,"progressLeft":"33%","playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeight":10,"class":"ViewerArea","progressBorderSize":0,"id":"MainViewer","vrPointerColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipPaddingTop":4,"progressBarBorderRadius":2,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333138","progressBarBorderSize":0,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50,"firstTransitionDuration":0,"progressBackgroundColorRatios":[0],"playbackBarLeft":0,"playbackBarRight":0,"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","progressRight":"33%","toolTipPaddingBottom":4,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderSize":0,"progressBarBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingRight":6,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","minHeight":50},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_5B2B11CD_4970_A6A5_41B1_7F4D87710A6C_camera","initialSequence":"this.sequence_5B2A0594_4970_AEBB_41C3_CAA4A3951C6F","enterPointingToHorizon":true},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_5B2AC9E9_4970_A66D_41D0_5E7D0B675895_camera","initialSequence":"this.sequence_5B2A4594_4970_AEBB_4195_48D66447986A","enterPointingToHorizon":true},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":-175.02,"pitch":-22.25},"id":"panorama_5AC144F9_4970_AE6D_4198_A8D20EE8B278_camera","initialSequence":"this.sequence_5B2A6593_4970_AEBD_4177_FC15E894A844","enterPointingToHorizon":true},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-37.2,"yaw":10.73,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_71167B04_4953_9B9B_41B8_447698F02944","data":{"label":"Circle Point 02b"}}],"id":"overlay_520E2438_4970_6DEB_41AC_3B0EB065004A","areas":["this.HotspotPanoramaOverlayArea_5205143C_4970_6DEB_41B2_8314CA6A5A2C"],"enabledInCardboard":true},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-37.4,"yaw":119.83,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_7119BB04_4953_9B9B_41D0_D72809272E1E","data":{"label":"Circle Point 02b"}}],"id":"overlay_552F76A6_4973_AAE7_41AC_F0D174BB471F","areas":["this.HotspotPanoramaOverlayArea_5522F6B6_4973_AAE7_41B4_1004EC0401A8"],"enabledInCardboard":true},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_5B2A2594_4970_AEBB_41C6_640C14B483BA"},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-31.15,"yaw":-154.36,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_7116AB03_4953_9B9D_41D1_66E250C1FB22","data":{"label":"Circle Point 02b"}}],"id":"overlay_51828FF9_497F_9A6D_41D2_2809BCE47A0A","areas":["this.HotspotPanoramaOverlayArea_5158E04D_497F_E5A5_41C6_394ACF5EF066"],"enabledInCardboard":true},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-31.12,"yaw":12.11,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_7116EB03_4953_9B9D_41B4_DD59B17DC69E","data":{"label":"Circle Point 02b"}}],"id":"overlay_50B3A4C6_4971_AEA7_41B0_C6D0C52704C9","areas":["this.HotspotPanoramaOverlayArea_536834CB_4971_AEAD_41D2_1F1B05E1621D"],"enabledInCardboard":true},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-40.59,"yaw":-162.9,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_71163B03_4953_9B9D_41B6_E4FE639BE266","data":{"label":"Circle Point 02b"}}],"id":"overlay_56D4F2B9_4970_AAED_4170_A5421DEE9AB5","areas":["this.HotspotPanoramaOverlayArea_56ABA2D0_4970_AABB_41CE_6446F02B7838"],"enabledInCardboard":true},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-41.75,"yaw":159.51,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_7119FB04_4953_9B9B_41BA_FBC142A8C309","data":{"label":"Circle Point 02b"}}],"id":"overlay_524A67B3_4970_AAFD_41B3_26F83CAD72CB","areas":["this.HotspotPanoramaOverlayArea_5259E7B7_4970_AAE5_41C8_565742FA1C18"],"enabledInCardboard":true},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_5B2A0594_4970_AEBB_41C3_CAA4A3951C6F"},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_5B2A4594_4970_AEBB_4195_48D66447986A"},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_5B2A6593_4970_AEBD_4177_FC15E894A844"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_55D558C7_4971_E6A5_41CC_699324FB05FB_0.png","height":82,"width":3792}],"id":"AnimatedImageResource_71167B04_4953_9B9B_41B8_447698F02944","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5205143C_4970_6DEB_41B2_8314CA6A5A2C","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_55D558C7_4971_E6A5_41CC_699324FB05FB_0.png","height":82,"width":3792}],"id":"AnimatedImageResource_7119BB04_4953_9B9B_41D0_D72809272E1E","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5522F6B6_4973_AAE7_41B4_1004EC0401A8","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_55D558C7_4971_E6A5_41CC_699324FB05FB_0.png","height":82,"width":3792}],"id":"AnimatedImageResource_7116AB03_4953_9B9D_41D1_66E250C1FB22","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5158E04D_497F_E5A5_41C6_394ACF5EF066","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_55D558C7_4971_E6A5_41CC_699324FB05FB_0.png","height":82,"width":3792}],"id":"AnimatedImageResource_7116EB03_4953_9B9D_41B4_DD59B17DC69E","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_536834CB_4971_AEAD_41D2_1F1B05E1621D","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_55D558C7_4971_E6A5_41CC_699324FB05FB_0.png","height":82,"width":3792}],"id":"AnimatedImageResource_71163B03_4953_9B9D_41B6_E4FE639BE266","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_56ABA2D0_4970_AABB_41CE_6446F02B7838","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_55D558C7_4971_E6A5_41CC_699324FB05FB_0.png","height":82,"width":3792}],"id":"AnimatedImageResource_7119FB04_4953_9B9B_41BA_FBC142A8C309","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_5259E7B7_4970_AAE5_41C8_565742FA1C18","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any"}],"propagateClick":false,"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"class":"Player","id":"rootPlayer","minHeight":0,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.12.js.map
})();
//Generated with v2023.1.12, Thu Oct 19 2023
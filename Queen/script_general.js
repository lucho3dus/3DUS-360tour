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
var script = {"data":{"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"rate":1},"locales":{"en":"locale/en.txt"},"history":{},"name":"Player10262"},"scripts":{"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"historyGoForward":TDV.Tour.Script.historyGoForward,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"historyGoBack":TDV.Tour.Script.historyGoBack,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizStart":TDV.Tour.Script.quizStart,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setValue":TDV.Tour.Script.setValue,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"mixObject":TDV.Tour.Script.mixObject,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"translate":TDV.Tour.Script.translate,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clone":TDV.Tour.Script.clone,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizFinish":TDV.Tour.Script.quizFinish,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"init":TDV.Tour.Script.init,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setLocale":TDV.Tour.Script.setLocale,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeJS":TDV.Tour.Script.executeJS,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"createTween":TDV.Tour.Script.createTween,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"downloadFile":TDV.Tour.Script.downloadFile,"registerKey":TDV.Tour.Script.registerKey,"existsKey":TDV.Tour.Script.existsKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"resumePlayers":TDV.Tour.Script.resumePlayers,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMapLocation":TDV.Tour.Script.setMapLocation,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"openLink":TDV.Tour.Script.openLink,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlays":TDV.Tour.Script.getOverlays,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getKey":TDV.Tour.Script.getKey,"getPixels":TDV.Tour.Script.getPixels,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowScore":TDV.Tour.Script.quizShowScore},"gap":10,"layout":"absolute","scrollBarMargin":2,"start":"this.init()","children":["this.MainViewer"],"height":"100%","width":"100%","watermark":false,"hash": "86f6c3a5f1acbd06f92869083870796566287c3c75dddbd6ba2f0206c3ffcd1c", "definitions": [{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_0B99586E_4950_E667_41BE_68CCA223CA56_camera","initialSequence":"this.sequence_0B8A848A_4950_AEAF_41C2_55E9F35582AD","enterPointingToHorizon":true},{"thumbnailUrl":"media/panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990_t.jpg","label":trans('panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990.label'),"data":{"label":"Sheraton Augusta-Queen 360_3"},"overlays":["this.overlay_1A26BA48_4951_A5AB_4191_8B2A16B535D4","this.overlay_1DF8BDAC_4950_9EEB_41A6_9F79D049DAE9"],"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_0B99586E_4950_E667_41BE_68CCA223CA56","yaw":10.61,"distance":1.97,"data":{"overlayID":"overlay_1A26BA48_4951_A5AB_4191_8B2A16B535D4"},"backwardYaw":173.95,"select":"this.overlay_1A26BA48_4951_A5AB_4191_8B2A16B535D4.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","panorama":"this.panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88","yaw":-152.91,"distance":1.76,"data":{"overlayID":"overlay_1DF8BDAC_4950_9EEB_41A6_9F79D049DAE9"},"backwardYaw":135.33,"select":"this.overlay_1DF8BDAC_4950_9EEB_41A6_9F79D049DAE9.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":130,"hfov":360,"id":"panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990_0/{face}/0/{row}_{column}.jpg","tags":["ondemand","mobilevr2gen"],"colCount":18,"height":1536,"rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12,"height":1024,"rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"height":512,"rowCount":1,"width":3072}]}}]},{"thumbnailUrl":"media/panorama_0B99586E_4950_E667_41BE_68CCA223CA56_t.jpg","label":trans('panorama_0B99586E_4950_E667_41BE_68CCA223CA56.label'),"data":{"label":"Sheraton Augusta-Queen 360_2"},"overlays":["this.overlay_04DDEB9A_4950_7AAF_41CB_E64ED2FBA61E","this.overlay_1BA36711_4950_EBBD_41D2_2977924FE8D6"],"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990","yaw":173.95,"distance":2.74,"data":{"overlayID":"overlay_1BA36711_4950_EBBD_41D2_2977924FE8D6"},"backwardYaw":10.61,"select":"this.overlay_1BA36711_4950_EBBD_41D2_2977924FE8D6.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","panorama":"this.panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA","yaw":4.81,"distance":2.28,"data":{"overlayID":"overlay_04DDEB9A_4950_7AAF_41CB_E64ED2FBA61E"},"backwardYaw":172.47,"select":"this.overlay_04DDEB9A_4950_7AAF_41CB_E64ED2FBA61E.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":130,"hfov":360,"id":"panorama_0B99586E_4950_E667_41BE_68CCA223CA56","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0B99586E_4950_E667_41BE_68CCA223CA56_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_0B99586E_4950_E667_41BE_68CCA223CA56_0/{face}/0/{row}_{column}.jpg","tags":["ondemand","mobilevr2gen"],"colCount":18,"height":1536,"rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_0B99586E_4950_E667_41BE_68CCA223CA56_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12,"height":1024,"rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_0B99586E_4950_E667_41BE_68CCA223CA56_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"height":512,"rowCount":1,"width":3072}]}}]},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":-132.99,"pitch":-22.25},"id":"panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA_camera","initialSequence":"this.sequence_0B8AA48A_4950_AEAF_41CC_8010B8A66480","enterPointingToHorizon":true},{"thumbnailUrl":"media/panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88_t.jpg","label":trans('panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88.label'),"data":{"label":"Sheraton Augusta-Queen 360_4"},"overlays":["this.overlay_1F0E1E6B_4953_BA6D_41C7_560D9A9DEC6B"],"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990","yaw":135.33,"distance":1.62,"data":{"overlayID":"overlay_1F0E1E6B_4953_BA6D_41C7_560D9A9DEC6B"},"backwardYaw":-152.91,"select":"this.overlay_1F0E1E6B_4953_BA6D_41C7_560D9A9DEC6B.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":130,"hfov":360,"id":"panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88_0/{face}/0/{row}_{column}.jpg","tags":["ondemand","mobilevr2gen"],"colCount":18,"height":1536,"rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12,"height":1024,"rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"height":512,"rowCount":1,"width":3072}]}}]},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990_camera","initialSequence":"this.sequence_0B8B648A_4950_AEAF_419A_ED56E32706DE","enterPointingToHorizon":true},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88_camera","initialSequence":"this.sequence_0B8B548A_4950_AEAF_41D1_96A7119EF495","enterPointingToHorizon":true},{"thumbnailUrl":"media/panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA_t.jpg","label":trans('panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA.label'),"data":{"label":"Sheraton Augusta-Queen 360_1"},"overlays":["this.overlay_0429D59B_4951_AEAD_4170_69228A340FF3"],"vfov":180,"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_0B99586E_4950_E667_41BE_68CCA223CA56","yaw":172.47,"distance":2.87,"data":{"overlayID":"overlay_0429D59B_4951_AEAD_4170_69228A340FF3"},"backwardYaw":4.81,"select":"this.overlay_0429D59B_4951_AEAD_4170_69228A340FF3.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"150%","hfovMax":130,"hfov":360,"id":"panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","url":"media/panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA_0/{face}/0/{row}_{column}.jpg","tags":["ondemand","mobilevr2gen"],"colCount":18,"height":1536,"rowCount":3,"width":9216},{"class":"TiledImageResourceLevel","url":"media/panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","colCount":12,"height":1024,"rowCount":2,"width":6144},{"class":"TiledImageResourceLevel","url":"media/panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"colCount":6,"height":512,"rowCount":1,"width":3072}]}}]},{"playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarBottom":5,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowOpacity":0.7,"progressBorderRadius":2,"vrPointerSelectionTime":2000,"subtitlesFontFamily":"Arial","progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","width":"100%","progressBottom":10,"height":"100%","toolTipFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","propagateClick":false,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"playbackBarBackgroundOpacity":1,"toolTipPaddingLeft":6,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowOpacity":1,"progressHeight":2,"playbackBarBorderRadius":0,"progressLeft":"33%","playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeight":10,"class":"ViewerArea","progressBorderSize":0,"id":"MainViewer","vrPointerColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipPaddingTop":4,"progressBarBorderRadius":2,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333138","progressBarBorderSize":0,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50,"firstTransitionDuration":0,"progressBackgroundColorRatios":[0],"playbackBarLeft":0,"playbackBarRight":0,"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","progressRight":"33%","toolTipPaddingBottom":4,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderSize":0,"progressBarBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingRight":6,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","minHeight":50},{"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","displayPlaybackBar":true},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","media":"this.panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA","camera":"this.panorama_0C343209_4950_E5AD_41CC_7ED2EE551BAA_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","media":"this.panorama_0B99586E_4950_E667_41BE_68CCA223CA56","camera":"this.panorama_0B99586E_4950_E667_41BE_68CCA223CA56_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","media":"this.panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990","camera":"this.panorama_0B87BC9E_4950_9EA7_41B9_9AFB9439C990_camera","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","media":"this.panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88","camera":"this.panorama_0B8EE092_4950_A6BF_41C6_CD5EC8BCEC88_camera","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"id":"mainPlayList"},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_0B8A848A_4950_AEAF_41C2_55E9F35582AD"},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-40.74,"yaw":10.61,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_28BBF572_4950_EE7F_41B4_9AD00D1F7DE5","data":{"label":"Circle Point 02b"}}],"id":"overlay_1A26BA48_4951_A5AB_4191_8B2A16B535D4","areas":["this.HotspotPanoramaOverlayArea_1A1AFA4E_4951_A5A7_41B2_E452ECB58DBD"],"enabledInCardboard":true},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-43.94,"yaw":-152.91,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_28BB9572_4950_EE7F_41BD_E392C1168FB6","data":{"label":"Circle Point 02b"}}],"id":"overlay_1DF8BDAC_4950_9EEB_41A6_9F79D049DAE9","areas":["this.HotspotPanoramaOverlayArea_1DEC8DDD_4950_9EA5_41C9_5B9BEB6DBEB6"],"enabledInCardboard":true},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-36.64,"yaw":4.81,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_28BB1572_4950_EE7F_41CB_4205388BBB83","data":{"label":"Circle Point 02b"}}],"id":"overlay_04DDEB9A_4950_7AAF_41CB_E64ED2FBA61E","areas":["this.HotspotPanoramaOverlayArea_0486EBB9_4950_7AED_4172_C415DAED869C"],"enabledInCardboard":true},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-31.83,"yaw":173.95,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_28BB2572_4950_EE7F_41C5_C089E5C730EA","data":{"label":"Circle Point 02b"}}],"id":"overlay_1BA36711_4950_EBBD_41D2_2977924FE8D6","areas":["this.HotspotPanoramaOverlayArea_1B99671C_4950_EBAB_41C8_70E7FF0968F4"],"enabledInCardboard":true},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_0B8AA48A_4950_AEAF_41CC_8010B8A66480"},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-46.31,"yaw":135.33,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_28B45572_4950_EE7F_41C0_C479C8B05B8D","data":{"label":"Circle Point 02b"}}],"id":"overlay_1F0E1E6B_4953_BA6D_41C7_560D9A9DEC6B","areas":["this.HotspotPanoramaOverlayArea_1F024E6F_4953_BA65_41B4_20CA26533EC7"],"enabledInCardboard":true},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_0B8B648A_4950_AEAF_419A_ED56E32706DE"},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_0B8B548A_4950_AEAF_41D1_96A7119EF495"},{"maps":[],"data":{"label":"Circle Point 02b","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"vfov":5.43,"distance":100,"hfov":10.5,"class":"HotspotPanoramaOverlayImage","pitch":-30.62,"yaw":172.47,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_28BB4572_4950_EE7F_41C1_CAEC2B59DE35","data":{"label":"Circle Point 02b"}}],"id":"overlay_0429D59B_4951_AEAD_4170_69228A340FF3","areas":["this.HotspotPanoramaOverlayArea_041595A7_4951_AEE5_41B5_AF32C6B73358"],"enabledInCardboard":true},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_1008D4D4_4950_AEBB_41C8_BBA68344BBAB_0.png","height":81,"width":3768}],"id":"AnimatedImageResource_28BBF572_4950_EE7F_41B4_9AD00D1F7DE5","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_1A1AFA4E_4951_A5A7_41B2_E452ECB58DBD","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_1008D4D4_4950_AEBB_41C8_BBA68344BBAB_0.png","height":81,"width":3768}],"id":"AnimatedImageResource_28BB9572_4950_EE7F_41BD_E392C1168FB6","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_1DEC8DDD_4950_9EA5_41C9_5B9BEB6DBEB6","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_1008D4D4_4950_AEBB_41C8_BBA68344BBAB_0.png","height":81,"width":3768}],"id":"AnimatedImageResource_28BB1572_4950_EE7F_41CB_4205388BBB83","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_0486EBB9_4950_7AED_4172_C415DAED869C","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_1008D4D4_4950_AEBB_41C8_BBA68344BBAB_0.png","height":81,"width":3768}],"id":"AnimatedImageResource_28BB2572_4950_EE7F_41C5_C089E5C730EA","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_1B99671C_4950_EBAB_41C8_70E7FF0968F4","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_1008D4D4_4950_AEBB_41C8_BBA68344BBAB_0.png","height":81,"width":3768}],"id":"AnimatedImageResource_28B45572_4950_EE7F_41C0_C479C8B05B8D","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_1F024E6F_4953_BA65_41B4_20CA26533EC7","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any"},{"finalFrame":"first","rowCount":1,"colCount":24,"frameDuration":41,"class":"AnimatedImageResource","levels":[{"class":"ImageResourceLevel","url":"media/res_1008D4D4_4950_AEBB_41C8_BBA68344BBAB_0.png","height":81,"width":3768}],"id":"AnimatedImageResource_28BB4572_4950_EE7F_41C1_CAEC2B59DE35","frameCount":24},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_041595A7_4951_AEE5_41B5_AF32C6B73358","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"}],"propagateClick":false,"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"class":"Player","id":"rootPlayer","minHeight":0,"minWidth":0};
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
function wifiadvancedGenPage() {
  var page =
    '<div id="wifiadvanced_page"><script type="text/javascript" src="../js/wificommon.js"></script>\
    <div class="maintitle">\
    <div lang-id="menu.wifiadvanced"></div>\
    <div class="page_description_text" lang-id="wifiadv.descriptions"></div>\
    </div>\
    <div id="wifiadv_prompt" class="page_prompt_info page_scenes_info_text hide">\
    </div>\
    <div id="wifiadv_content">\
    <div id="wifiadv_firstline" style="padding-top:10px" class="hide"> </div>\
    <div id="wifiadv_frequency_div" class="clearboth " style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.frequency"> </div>\
    <div class="controls">\
    <div class="select_on_normal" id="wifiadv_frequency" value="0" onclick="SelectItem(this)" >2.4GHz</div>\
    <div id="wifiadv_frequency_list" class="select_list hide">\
    <div id="wifiadv_frequency_list_item_1" option="0" class="select_medium">2.4GHz</div>\
    <div id="wifiadv_frequency_list_item_2" option="1" class="select_medium">5GHz</div>\
    </div>\
    </div>\
    <div id="wifiadv_frequency_prompt_div" class="clearboth hide">\
    <div class="control-label">&nbsp;</div>\
    <div class="controls" style="margin-top:3px;">\
    <div class="notice_message" id="wifiadv_frequency_prompt" lang-id=""></div>\
    </div>\
    </div>\
    </div>\
    <div id="wifiadv_autoofftime_div" class="clearboth " style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.autoofftime"> </div>\
    <div class="controls">\
    <div class="select_on_normal" id="wifiadv_autoofftime"  onclick="SelectItem(this)" ></div>\
    <div id="wifiadv_autoofftime_list" class="select_list hide">\
    <div id="wifiadv_autoofftime_list_item_1" option="0" class="select_medium" lang-id="wifiadv.noautooff"></div>\
    </div>\
    </div>\
    <div class="clearboth control-label">&nbsp;</div>\
    <div class="controls" style="margin-top:3px;">\
    <div class="notice_message" lang-id="wifiadv.autooff_help"></div>\
    </div>\
    </div>\
    <div id="wifiadv_dbdc_maxassociate_div" class="clearboth hide" style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.maxassociate"> </div>\
    <div class="controls input_normal">\
    <input onfocus="showInputBorder(this)" onblur="hideInputBorder(this)" id="wifiadv_dbdc_maxassociate" type="text" maxlength="2" />\
    </div>\
    </div>\
    <div id="wifiadv_pmf_div" class="clearboth " style="padding-top:30px" >\
    <div class="control-label" lang-id="wifiadv.pmf"></div>\
    <div class="controls" style="margin-top:3px;">\
    <div id="wifiadv_pmf_check" class="check_off" onclick="checkbox(this)"></div>\
    </div>\
    <div class="clearboth control-label">&nbsp;</div>\
    <div class="controls" style="margin-top:3px;">\
    <div class="notice_message" lang-id="wifiadv.pmf_help"></div>\
    </div>\
    </div>\
    <div id="wifiadv_lcdshow_div" class="clearboth hide" style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.lcdshow"></div>\
    <div class="controls">\
    <div class="select_on_normal" id="wifiadv_lcdshow" value="0" lang-id="wifiadv.lcdshownone"></div>\
    <div id="wifiadv_lcdshow_list" class="select_list hide">\
    <div id="wifiadv_lcdshow_list_item_1" option="0" class="select_medium"><div id="wifiadv_lcdshow_list_item_content_0" class="select_medium_content wordbreak" option="0" style="width:285px"><span id="wifiadv_lcdshow_list_item_text_0" option="0" lang-id="wifiadv.lcdshownone"></span></div></div>\
    <div id="wifiadv_lcdshow_list_item_2" option="1" class="select_medium"><div id="wifiadv_lcdshow_list_item_content_1" class="select_medium_content wordbreak" option="1" style="width:285px"><span id="wifiadv_lcdshow_list_item_text_1"  option="1" lang-id="wifiadv.lcdshowssidplainpwd"></span></div></div>\
    <div id="wifiadv_lcdshow_list_item_3" option="2" class="select_medium"><div id="wifiadv_lcdshow_list_item_content_2" class="select_medium_content wordbreak" option="2" style="width:285px"><span id="wifiadv_lcdshow_list_item_text_2"  option="2" lang-id="wifiadv.lcdshowssidcipherpwd"></span></div></div>\
    <div id="wifiadv_lcdshow_list_item_4" option="3" class="select_medium"><div id="wifiadv_lcdshow_list_item_content_3" class="select_medium_content wordbreak" option="3" style="width:285px"><span id="wifiadv_lcdshow_list_item_text_3"  option="3" lang-id="wifiadv.lcdshowssid"></span></div></div>\
    </div>\
    </div>\
    </div>\
    <div id="wifiadv_2g">\
    <div class="wifiadv_title" style="padding-bottom:10px">\
    <div class="maintitle" lang-id="wifi_2g_lable" style="padding-top:50px"> </div>\
    </div>\
    <div id="wifiadv_2g_prompt" class="page_prompt_info page_scenes_info_text hide" style="margin-top:30px;">\
    </div>\
    <div id="wifiadv_2g_content">\
    <div id="wifiadv_2g_maxassociate_div" class="clearboth hide" style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.maxassociate"> </div>\
    <div class="controls input_normal">\
    <input onfocus="showInputBorder(this)" onblur="hideInputBorder(this)" id="wifiadv_2g_maxassociate" type="text" maxlength="2" />\
    </div>\
    </div>\
    <div id="wifiadv_2g_mode_div" class="clearboth " style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.mode"> </div>\
    <div class="controls">\
    <div class="select_on_normal" id="wifiadv_2g_mode" onclick="SelectItem(this)"></div>\
    <div id="wifiadv_2g_mode_list" class="select_list hide">\
    </div>\
    </div>\
    </div>\
    <div id="wifiadv_2g_bandwidth_div" class="clearboth " style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.bandwidth"> </div>\
    <div class="controls">\
    <div class="select_on_normal" id="wifiadv_2g_bandwidth" value="b/g/n" onclick="SelectItem(this)" ></div>\
    <div id="wifiadv_2g_bandwidth_list" class="select_list hide">\
    </div>\
    </div>\
    </div>\
    <div id="wifiadv_2g_channel_div" class="clearboth " style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.channel"> </div>\
    <div class="controls">\
    <div class="select_on_normal" id="wifiadv_2g_channel" value="" onclick="SelectItem(this)" ></div>\
    <div id="wifiadv_2g_channel_list" class="select_list hide">\
    </div>\
    </div>\
    </div>\
    <div id="wifiadv_autoApti_prompt_div" class="clearboth hide">\
    <div class="control-label" style="margin-top: 8px;">\
    <span lang-id=""></span>\
    </div>\
    <div class="controls">\
    <div class="notice_message" lang-id="wifiadv.autpAptiPrompt"></div>\
    </div>\
    </div>\
    <div id="wifiadv_atuoApti_div" class="clearboth hide" style="padding-top:22px" >\
    <div class="control-label" lang-id="wifiadv.channelAutoApti"></div>\
    <div class="controls" style="margin-top:8px;">\
    <div id="wifiadv_autoApti_check" class="check_off" onclick="checkbox(this)"></div>\
    </div>\
    <div class="clearboth control-label">&nbsp;</div>\
    <div class="controls" style="margin-top:3px;">\
    <div class="notice_message" lang-id="wifiadv.channelAutoApti_prompt"></div>\
    </div>\
    </div>\
    </div>\
    </div>\
    <div id="wifiadv_5g">\
    <div class="wifiadv_title" style="padding-bottom:10px">\
    <div class="maintitle" lang-id="wifi_5g_lable" style="padding-top:50px"></div>\
    </div>\
    <div id="wifiadv_5g_prompt" class="page_prompt_info page_scenes_info_text hide" style="margin-top:30px;" >\
    </div>\
    <div id="wifiadv_5g_content">\
    <div id="wifiadv_5g_maxassociate_div" class="clearboth hide" style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.maxassociate"> </div>\
    <div class="controls input_normal">\
    <input onfocus="showInputBorder(this)" onblur="hideInputBorder(this)" id="wifiadv_5g_maxassociate" type="text" maxlength="2" />\
    </div>\
    </div>\
    <div id="wifiadv_5g_mode_div" class="clearboth " style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.mode"> </div>\
    <div class="controls">\
    <div class="select_on_normal" id="wifiadv_5g_mode" value="" onclick="SelectItem(this)"></div>\
    <div id="wifiadv_5g_mode_list" class="select_list hide"> </div>\
    </div>\
    </div>\
    <div id="wifiadv_5g_bandwidth_div" class="clearboth " style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.bandwidth"> </div>\
    <div class="controls">\
    <div class="select_on_normal" id="wifiadv_5g_bandwidth" value="" onclick="SelectItem(this)"></div>\
    <div id="wifiadv_5g_bandwidth_list" class="select_list hide">\
    </div>\
    </div>\
    </div>\
    <div id="wifiadv_5g_channel_div" class="clearboth " style="padding-top:30px;">\
    <div class="control-label" lang-id="wifiadv.channel"> </div>\
    <div class="controls">\
    <div class="select_on_normal" id="wifiadv_5g_channel" value="" onclick="SelectItem(this)"></div>\
    <div id="wifiadv_5g_channel_list" class="select_list hide">\
    </div>\
    </div>\
    </div>\
    <div id="wifiadv_5g_channel_prompt_div" class="clearboth hide" >\
    <div class="control-label" >&nbsp; </div>\
    <div class="controls">\
    <div class="notice_message" id="wifiadv_5g_channel_prompt"></div>\
    </div>\
    </div>\
    </div>\
    </div>\
    <div class="clearboth" id="wifiadv_btn_save_div" style="padding-top:50px">\
    <div class="control-label">&nbsp;</div>\
    <div class="controls">\
    <button class="btn_normal_long btn_disabled" id="wifiadv_btn_save" lang-id="btn.save"></button>\
    </div>\
    </div>\
    <div class="clearboth" style="padding-top:70px"></div>\
    </div><div style="height:40px;">&nbsp;</div></div>';
  $("#rightpagearea").prepend(page);
  setTimeout(function () {
    showNationalLang();
  }, 100);
  if (typeof wifiadvancedRenderPage == "function") {
    beforeRenderPage("wifiadvanced");
    wifiadvancedRenderPage();
    afterRenderPage("wifiadvanced");
  }
}
var wifiadvController = (function () {
  var wifiCtl = {};
  var gWifiStatusSettings = [];
  var gWifiBasicData = [];
  var gWifiFeatureSwitch = GLOBAL.wifiFeatureSwitch;
  var gWifiSecurityEx = null;
  var gmonitorstatus = null;
  var gpinstatus = null;
  var gWifiConfigure = null;
  var gProductType = "mobile-wifi";
  var gProductName = "";
  var gcountryChanneldata = "";
  var gwifioffTime = [];
  var gwifioffTimeLength = "";
  EMUI.wifiLcdShow = EMUI.ObjController.extend({
    objName: "wlan/ssid-switch-settings",
    getsuccessProc: function (data) {
      var responceData = data["response"];
      showSelectedValue("wifiadv_lcdshow", responceData["showssid_mode"]);
    },
    save: function (showssidenable, isShowSaveInfo) {
      if (!showssidenable || showssidenable !== "1") {
        return;
      }
      var self = this;
      var dateObj = {
        showssid_mode: $("#wifiadv_lcdshow").val(),
      };
      self.postData(
        dateObj,
        function (ret) {
          if (isShowSaveInfo) {
            if (ret.response && ret.response === "OK") {
              utilStartCommonDialog(publicLang.common_success);
            } else {
              utilStartCommonDialog(publicLang.common_failure);
            }
            setTimeout(clearDialog, 1000);
          }
        },
        false
      );
    },
  });
  function commonCallBack(ret) {
    if (ret.response && ret.response === "OK") {
      utilStartCommonDialog(publicLang.wifi_change_parameter_connect);
      setTimeout(clearDialog, 2000);
      return;
    } else if (ret.error && ret.error.code === "100004") {
      utilStartCommonDialog(publicLang.common_system_busy);
    } else {
      utilStartCommonDialog(publicLang.common_failure);
    }
    setTimeout(clearDialog, 1000);
  }
  function clearDialog() {
    utilStopCommonDialog();
    init();
  }
  function getMainSsidIndex(radioindex) {
    return wifiCtl.getMainSsidIndex(
      radioindex,
      gWifiFeatureSwitch,
      gWifiBasicData
    );
  }
  function getSwitchStatus(radioindex) {
    if (radioindex !== wifiCtl.RADIO_2G && radioindex !== wifiCtl.RADIO_5G) {
      return gWifiStatusSettings[0].wifienable;
    }
    if (wifiCtl.isSingleChip(gWifiFeatureSwitch)) {
      return gWifiStatusSettings[0].wifienable;
    }
    if (wifiCtl.isDbdcChip(gWifiFeatureSwitch)) {
      if (gWifiStatusSettings[radioindex].wifienable === "0") {
        return "0";
      }
      return gWifiBasicData[getMainSsidIndex(radioindex)].WifiEnable;
    }
    if (wifiCtl.isDoubleChip(gWifiFeatureSwitch)) {
      return gWifiStatusSettings[radioindex].wifienable;
    }
    return gWifiStatusSettings[0].wifienable;
  }
  function loadData() {
    if (!EMUI.CountryChannel) {
      $.getScript("../js/country.js");
    }
    getAjaxData("api/wlan/status-switch-settings", getStatusSwitchSettings, {
      sync: true,
    });
    getAjaxData("api/wlan/multi-basic-settings", getWifiMutiBaiscSettings, {
      sync: true,
    });
    getAjaxData("api/wlan/multi-security-settings-ex", getSecurityExHandler, {
      sync: true,
    });
    getAjaxData("api/device/basic_information", getDeviceInfoHandler, {
      sync: true,
    });
    getConfigData("wifi/countryChannel.xml", getallChannelXmlData, {
      sync: true,
    });
    gWifiConfigure = wifiCtl.loadWifiConfigureXml();
    if (wifiCtl.isSingleChip(gWifiFeatureSwitch)) {
      if (
        wifiCtl.getSingleChipFrequency(gWifiSecurityEx[0].WifiMode) ===
        wifiCtl.RADIO_2G
      ) {
        getAjaxData("api/monitoring/status", getMonitorStatus, { sync: true });
        getAjaxData("api/pin/status", getPinStatus, { sync: true });
      }
    }
    if (
      gWifiFeatureSwitch.showssid_enable &&
      gWifiFeatureSwitch.showssid_enable === "1"
    ) {
      EMUI.wifiLcdShow.load(null, false);
    }
  }
  function getallChannelXmlData($xml) {
    gcountryChanneldata = xml2object($xml).config;
  }
  function getSecurityExHandler(ret) {
    if (ret.type === "response") {
      gWifiSecurityEx = $.makeArray(ret.response.ssids.ssid);
    }
  }
  function getStatusSwitchSettings(ret) {
    if (ret.type === "response") {
      gWifiStatusSettings = $.makeArray(ret.response.radios.radio);
    }
  }
  function getMonitorStatus(ret) {
    if (ret.type === "response") {
      gmonitorstatus = ret.response;
    }
  }
  function getPinStatus(ret) {
    if (ret.type === "response") {
      gpinstatus = ret.response;
    }
  }
  function getWifiMutiBaiscSettings(ret) {
    if (ret.type === "response") {
      gWifiBasicData = ret.response.Ssids.Ssid;
      gWifiBasicData = $.makeArray(gWifiBasicData);
    }
  }
  function getDeviceInfoHandler(ret) {
    if (ret.type === "response") {
      gProductType = ret.response.classify;
      gProductName = ret.response.devicename;
    }
  }
  function getDefaultValue(radio) {
    var defaultvalue = [];
    defaultvalue[wifiCtl.RADIO_2G] = {
      mode: "b/g/n",
      bandwidth: "0",
      channel: "0",
    };
    defaultvalue[wifiCtl.RADIO_5G] = {
      mode: gWifiFeatureSwitch.acmode_enable !== "1" ? "a/n" : "a/n/ac",
      bandwidth: gProductType === "cpe" ? "0" : "20",
      channel: "0",
    };
    return defaultvalue[radio];
  }
  function selectFrequencyHandle() {
    var selectfrequency = $("#wifiadv_frequency").val();
    selectfrequency = parseInt(selectfrequency, 10);
    var id = ["#wifiadv_2g", "#wifiadv_5g"];
    $(id[0]).hide();
    $(id[1]).hide();
    $(id[selectfrequency]).show();
    $("#wifiadv_frequency_prompt_div").hide();
    if (selectfrequency === wifiCtl.RADIO_5G) {
      showPrompt("#wifiadv_frequency_prompt", "wifiadv.5gwarn");
      if (
        gWifiFeatureSwitch.pmf_enable &&
        gWifiFeatureSwitch.pmf_enable === "2"
      ) {
        $("#wifiadv_pmf_div").show();
        $("#wifiadv_firstline").show();
      }
    } else if (selectfrequency === wifiCtl.RADIO_2G) {
      if (
        gWifiFeatureSwitch.pmf_enable &&
        gWifiFeatureSwitch.pmf_enable === "2"
      ) {
        $("#wifiadv_pmf_div").hide();
        $("#wifiadv_firstline").hide();
      }
    }
    if (
      selectfrequency ===
      wifiCtl.getSingleChipFrequency(gWifiSecurityEx[0].WifiMode)
    ) {
      initChipPara(selectfrequency);
    } else {
      var defaultvalue = getDefaultValue(selectfrequency);
      initMaxassco(selectfrequency);
      initMode(selectfrequency, defaultvalue.mode);
      initBandWidth(selectfrequency, defaultvalue.bandwidth);
      initChannel(selectfrequency, defaultvalue.channel);
    }
    if (
      selectfrequency === wifiCtl.RADIO_5G &&
      gWifiFeatureSwitch.wifi_dfs_enable &&
      gWifiFeatureSwitch.wifi_dfs_enable === "1"
    ) {
      $("#wifiadv_5g_channel_div").hide();
    }
  }
  function selectBandWithHandle(radio) {
    if (gProductType !== "cpe" || radio !== wifiCtl.RADIO_5G) {
      return;
    }
    var cureentchannle = $("#wifiadv_5g_channel").val();
    var defaultvalue = getDefaultValue(radio);
    initChannel(radio, defaultvalue.channel);
    showSelectedValue("wifiadv_5g_channel", cureentchannle);
    showChannelPrompt();
  }
  function selectChannelHandle(radio) {
    if (radio !== wifiCtl.RADIO_5G) {
      return;
    }
    showChannelPrompt();
  }
  function save() {
    if ($("#wifiadv_btn_save").hasClass("btn_disabled")) {
      return;
    }
    if (!isIntelligenceConnect()) {
      return;
    }
    clearAllErrorMsg();
    if (!checkMaxassoc()) {
      return;
    }
    var basic = getBasicDataFromPage();
    var security = getSecurityDataFromPage();
    if (isNeedReboot(security)) {
      utilStartConfirmDialog(
        publicLang["wifiadv.reboot"],
        function () {
          confirmSave(basic, security);
        },
        null,
        publicLang["content.continue"]
      );
      return;
    }
    confirmSave(basic, security);
    function getSendFrequency(ssidindex) {
      if (wifiCtl.isSingleChip(gWifiFeatureSwitch)) {
        if (!$("#wifiadv_frequency_div").is(":hidden")) {
          return parseInt($("#wifiadv_frequency").val(), 10);
        }
        return wifiCtl.getSingleChipFrequency(gWifiSecurityEx[0].WifiMode);
      }
      if (parseInt(ssidindex, 10) >= getMainSsidIndex(wifiCtl.RADIO_5G)) {
        return wifiCtl.RADIO_5G;
      }
      return wifiCtl.RADIO_2G;
    }
    function checkMaxassoc() {
      if (
        gWifiFeatureSwitch.show_maxassoc &&
        gWifiFeatureSwitch.show_maxassoc === "2" &&
        wifiCtl.isDbdcChip(gWifiFeatureSwitch)
      ) {
        var value = $("#wifiadv_dbdc_maxassociate").val();
        if (
          !VALIDATION.isDigital(value) ||
          parseInt(value, 10) >
            parseInt(gWifiFeatureSwitch.wifi_chip_maxassoc, 10) ||
          parseInt(value, 10) < 1
        ) {
          showErrorMsg(
            "wifiadv_dbdc_maxassociate_div",
            "wifiadv.maxassociate_error",
            gWifiFeatureSwitch.wifi_chip_maxassoc
          );
          return false;
        }
        return true;
      }
      for (var i = wifiCtl.RADIO_2G; i <= wifiCtl.RADIO_5G; i++) {
        var idprefix = i === wifiCtl.RADIO_2G ? "wifiadv_2g_" : "wifiadv_5g_";
        if ($("#" + idprefix + "maxassociate_div").is(":hidden")) {
          return true;
        }
        var value = $("#" + idprefix + "maxassociate").val();
        if (
          !VALIDATION.isDigital(value) ||
          parseInt(value, 10) >
            parseInt(gWifiFeatureSwitch.wifi_chip_maxassoc, 10) ||
          parseInt(value, 10) < 1
        ) {
          showErrorMsg(
            idprefix + "maxassociate_div",
            "wifiadv.maxassociate_error",
            gWifiFeatureSwitch.wifi_chip_maxassoc
          );
          return false;
        }
      }
      return true;
    }
    function getBasicDataFromPage() {
      var basicdata = EMUI.ObjController.cloneObject(gWifiBasicData);
      for (var i = 0; i < basicdata.length; i++) {
        var ssid = basicdata[i];
        var frequency = getSendFrequency(ssid.Index);
        var idprefix =
          frequency === wifiCtl.RADIO_2G ? "#wifiadv_2g_" : "#wifiadv_5g_";
        if (
          gWifiFeatureSwitch.show_maxassoc &&
          gWifiFeatureSwitch.show_maxassoc === "2"
        ) {
          if (wifiCtl.isDbdcChip(gWifiFeatureSwitch)) {
            ssid.wifi_max_assoc = $("#wifiadv_dbdc_maxassociate").val();
            continue;
          }
          if ($(idprefix + "maxassociate_div").is(":hidden")) {
            continue;
          }
          ssid.wifi_max_assoc = $(idprefix + "maxassociate").val();
        }
      }
      return basicdata;
    }
    function getSecurityDataFromPage() {
      var securitydata = EMUI.ObjController.cloneObject(gWifiSecurityEx);
      securitydata.forEach(function (ssid) {
        var frequency = getSendFrequency(ssid.Index);
        var idprefix =
          frequency === wifiCtl.RADIO_2G ? "#wifiadv_2g_" : "#wifiadv_5g_";
        var defaultvalue = getDefaultValue(frequency);
        if (
          GLOBAL.config.battery_enabled &&
          GLOBAL.config.battery_enabled === "1"
        ) {
          var timevalue = $("#wifiadv_autoofftime").val();
          ssid.Wifioffenable = "0";
          if (timevalue !== "0") {
            ssid.Wifioffenable = "1";
            ssid.Wifiofftime = timevalue;
          }
        }
        if (
          gWifiFeatureSwitch.pmf_enable &&
          gWifiFeatureSwitch.pmf_enable === "1"
        ) {
          ssid.pmf_switch = "0";
          if ($("#wifiadv_pmf_check").hasClass("check_on")) {
            ssid.pmf_switch = "1";
          }
        }
        if (
          gWifiFeatureSwitch.pmf_enable &&
          gWifiFeatureSwitch.pmf_enable === "2" &&
          frequency === wifiCtl.RADIO_5G
        ) {
          ssid.pmf_switch = "0";
          if ($("#wifiadv_pmf_check").hasClass("check_on")) {
            ssid.pmf_switch = "1";
          }
        }
        if ($(idprefix + "content").is(":hidden")) {
          return;
        }
        if (
          gWifiConfigure.wifimodedisplay &&
          gWifiConfigure.wifimodedisplay === "1"
        ) {
          ssid.WifiMode = $(idprefix + "mode").val();
        } else if (wifiCtl.isSingleChip(gWifiFeatureSwitch)) {
          ssid.WifiMode = defaultvalue.mode;
        }
        if (
          gWifiConfigure.wifiBandWidthenable &&
          gWifiConfigure.wifiBandWidthenable === "1"
        ) {
          ssid.wifibandwidth = $(idprefix + "bandwidth").val();
        }
        ssid.WifiChannel = $(idprefix + "channel").val();
        if (
          frequency === wifiCtl.RADIO_2G &&
          gWifiFeatureSwitch.channel_optimize_enable === "1"
        ) {
          var checkStatus = $("#wifiadv_autoApti_check").attr("class");
          ssid.WifiChannelAutoOptimize = "0";
          if (checkStatus === "check_on") {
            ssid.WifiChannelAutoOptimize = "1";
          }
        }
      });
      return securitydata;
    }
    function isNeedReboot(securitydata) {
      if (
        !gWifiConfigure.wifimode24gneedreboot &&
        !gWifiConfigure.wifimode5gneedreboot
      ) {
        return false;
      }
      var mode2greboot = gWifiConfigure.wifimode24gneedreboot.split(",");
      var mode5greboot = gWifiConfigure.wifimode5gneedreboot.split(",");
      var ssid2g = getMainSsidIndex(wifiCtl.RADIO_2G);
      var ssid5g = getMainSsidIndex(wifiCtl.RADIO_5G);
      if (
        securitydata[ssid2g].WifiMode !== gWifiSecurityEx[ssid2g].WifiMode &&
        $.inArray(securitydata[ssid2g].WifiMode, mode2greboot) !== -1
      ) {
        return true;
      }
      if (
        securitydata[ssid5g].WifiMode !== gWifiSecurityEx[ssid5g].WifiMode &&
        $.inArray(securitydata[ssid5g].WifiMode, mode5greboot) !== -1
      ) {
        return true;
      }
      return false;
    }
    function rebootCallBack(ret) {
      if (ret.response && ret.response === "OK") {
        EMUI.RebootController.rebootExe();
      } else if (ret.error && ret.error.code === "100004") {
        utilStartCommonDialog(publicLang.common_system_busy);
        setTimeout(clearDialog, 1000);
      } else {
        utilStartCommonDialog(publicLang.common_failure);
        setTimeout(clearDialog, 1000);
      }
    }
    function confirmSave(basicdata, securitydata) {
      var callback = isNeedReboot(securitydata)
        ? rebootCallBack
        : commonCallBack;
      if (!EMUI.ObjController.compareObject(basicdata, gWifiBasicData)) {
        utilStartCommonDialog();
        EMUI.wifiLcdShow.isSupportSaveInfo = false;
        EMUI.wifiLcdShow.save(gWifiFeatureSwitch.showssid_enable);
        wifiCtl.postMutiBasicSwitch(
          basicdata,
          function (ret) {
            if (ret.response && ret.response === "OK") {
              wifiCtl.postSecurityEx(securitydata, callback);
            } else if (ret.error && ret.error.code === "100004") {
              utilStartCommonDialog(publicLang.common_system_busy);
              setTimeout(clearDialog, 1000);
            } else {
              utilStartCommonDialog(publicLang.common_failure);
              setTimeout(clearDialog, 1000);
            }
          },
          0
        );
      } else if (
        !EMUI.ObjController.compareObject(securitydata, gWifiSecurityEx)
      ) {
        utilStartCommonDialog();
        EMUI.wifiLcdShow.isSupportSaveInfo = false;
        EMUI.wifiLcdShow.save(gWifiFeatureSwitch.showssid_enable);
        wifiCtl.postSecurityEx(securitydata, callback);
      } else {
        if (
          gWifiFeatureSwitch.showssid_enable &&
          gWifiFeatureSwitch.showssid_enable === "1"
        ) {
          EMUI.wifiLcdShow.isSupportSaveInfo = true;
          EMUI.wifiLcdShow.save(gWifiFeatureSwitch.showssid_enable, true);
        } else {
          wifiCtl.postSecurityEx(securitydata, callback);
        }
      }
    }
  }
  function enableSaveBtn() {
    clearAllErrorMsg();
    $("#wifiadv_btn_save").removeClass("btn_disabled");
  }
  function selectModeHandle(radio) {
    var defaultvalue = getDefaultValue(radio);
    initBandWidth(radio, defaultvalue.bandwidth);
    initChannel(radio, defaultvalue.channel);
  }
  function bindEvents() {
    $("#wifiadv_frequency_list").live("click", selectFrequencyHandle);
    $("#wifiadv_2g_mode_list").live("click", function () {
      selectModeHandle(wifiCtl.RADIO_2G);
    });
    $("#wifiadv_5g_mode_list").live("click", function () {
      selectModeHandle(wifiCtl.RADIO_5G);
    });
    $("#wifiadv_5g_bandwidth_list").live("click", function () {
      selectBandWithHandle(wifiCtl.RADIO_5G);
    });
    $("#wifiadv_5g_channel_list").live("click", function () {
      selectChannelHandle(wifiCtl.RADIO_5G);
    });
    $("#wifiadv_btn_save").live("click", save);
    $("#wifiadv_content .select_list").live("click", enableSaveBtn);
    $("#wifiadv_content input").live("click change keyup", enableSaveBtn);
    $("#wifiadv_pmf_check").live("click change keyup", enableSaveBtn);
    $("#wifiadv_autoApti_check").live("click change keyup", enableSaveBtn);
    $("#wifiadv_autoApti_check").live("click", autoAptiSwitchHandle);
    $("#wifiadv_lcdshow").live("click", function () {
      SelectItem($(wifiadv_lcdshow));
    });
    $("#wifiadv_lcdshow_list_items .select_medium").live(
      "click",
      showAndAdjustMacFont
    );
  }
  function autoAptiSwitchHandle() {
    if ($("#wifiadv_autoApti_check").attr("class").indexOf("check_on") > -1) {
      utilStartConfirmDialog(
        publicLang["wifiadv.autoApti"],
        function () {
          $("#wifiadv_autoApti_check")
            .addClass("check_on")
            .removeClass("check_off");
          $("#wifiadv_2g_channel").removeAttr("onclick");
          $("#wifiadv_2g_channel")
            .addClass("select_on_normal_disable")
            .removeClass("select_on_normal");
          $("#wifiadv_2g_channel_div div").css("color", "#c1c1c1");
          $("#wifiadv_autoApti_prompt_div").show();
          showSelectedValue("wifiadv_2g_channel", "0");
        },
        function () {
          $("#wifiadv_autoApti_check")
            .addClass("check_off")
            .removeClass("check_on");
        },
        publicLang["btn.confirm"]
      );
    } else {
      $("#wifiadv_2g_channel").attr("onclick", "SelectItem(this)");
      $("#wifiadv_2g_channel")
        .addClass("select_on_normal")
        .removeClass("select_on_normal_disable");
      $("#wifiadv_2g_channel_div div").css("color", "#000000");
      $("#wifiadv_autoApti_prompt_div").hide();
    }
  }
  function initMode(radio, currentmode) {
    var id = ["wifiadv_2g_mode", "wifiadv_5g_mode"];
    if (
      !gWifiConfigure.wifimodedisplay ||
      gWifiConfigure.wifimodedisplay !== "1"
    ) {
      $("#" + id[radio] + "_div").hide();
      return;
    }
    $("#" + id[radio] + "_div").show();
    showModelist(radio);
    showSelectedValue(id[radio], currentmode);
    return;
    function showModelist(radiov) {
      var idlist = ["wifiadv_2g_mode_list", "wifiadv_5g_mode_list"];
      clearSelectItme(idlist[radiov]);
      var modelist =
        radiov === wifiCtl.RADIO_2G
          ? gWifiConfigure.wifimode24glist
          : gWifiConfigure.wifimode5glist;
      modelist = modelist.split(",");
      var mode;
      for (mode in modelist) {
        if (wifiCtl.checkMode(modelist[mode], radiov)) {
          var value = {
            option: modelist[mode],
            langid: "",
            text: modelist[mode],
          };
          addSelectItem(idlist[radiov], value);
        }
      }
    }
  }
  function initBandWidth(radio, currentbandwidth) {
    var id = ["wifiadv_2g_bandwidth", "wifiadv_5g_bandwidth"];
    if (
      !gWifiConfigure.wifiBandWidthenable ||
      gWifiConfigure.wifiBandWidthenable === "0"
    ) {
      $("#" + id[radio] + "_div").hide();
      return;
    }
    $("#" + id[radio] + "_div").show();
    showBandWidthList(radio);
    showSelectedValue(id[radio], currentbandwidth);
    return;
    function showBandWidthList(radiov) {
      var idlist = ["wifiadv_2g_bandwidth_list", "wifiadv_5g_bandwidth_list"];
      clearSelectItme(idlist[radiov]);
      var bandwidthlist = [];
      if (!gWifiConfigure.wifi24gbandwithlist) {
        bandwidthlist[wifiCtl.RADIO_2G] = ["0", "20"];
      } else {
        bandwidthlist[wifiCtl.RADIO_2G] =
          gWifiConfigure.wifi24gbandwithlist.split(",");
      }
      if (!gWifiConfigure.wifi5gbandwithlist) {
        bandwidthlist[wifiCtl.RADIO_5G] = ["0", "20"];
        if (wifiCtl.isDoubleChip(gWifiFeatureSwitch)) {
          bandwidthlist[wifiCtl.RADIO_5G] = ["0", "20", "40", "80"];
        }
      } else {
        bandwidthlist[wifiCtl.RADIO_5G] =
          gWifiConfigure.wifi5gbandwithlist.split(",");
      }
      if (
        gWifiConfigure.wifimodedisplay ||
        gWifiConfigure.wifimodedisplay === "1"
      ) {
        if (radiov === wifiCtl.RADIO_2G) {
          var cureentmode = $("#wifiadv_2g_mode").val();
          if (cureentmode && cureentmode.indexOf("n") < 0) {
            var bandList24g = bandwidthlist[wifiCtl.RADIO_2G].length;
            for (var i = 0; i < bandList24g; i++) {
              if (bandwidthlist[wifiCtl.RADIO_2G][i] === "40") {
                bandwidthlist[wifiCtl.RADIO_2G].splice(i, 1);
              }
            }
          }
        }
        if (radiov === wifiCtl.RADIO_5G) {
          var cureentmode = $("#wifiadv_5g_mode").val();
          var bandList5g = bandwidthlist[wifiCtl.RADIO_5G].length;
          if (
            cureentmode &&
            cureentmode.indexOf("ax") < 0 &&
            cureentmode.indexOf("ac") < 0
          ) {
            var i = bandwidthlist[wifiCtl.RADIO_5G].indexOf("160");
            if (i >= 0) {
              bandwidthlist[wifiCtl.RADIO_5G].splice(i, 1);
            }
          }
          if (cureentmode && cureentmode.indexOf("ac") < 0) {
            var i = bandwidthlist[wifiCtl.RADIO_5G].indexOf("80");
            if (i >= 0) {
              bandwidthlist[wifiCtl.RADIO_5G].splice(i, 1);
            }
          }
          if (
            cureentmode &&
            cureentmode.indexOf("ac") < 0 &&
            cureentmode.indexOf("n") < 0
          ) {
            var i = bandwidthlist[wifiCtl.RADIO_5G].indexOf("40");
            if (i >= 0) {
              bandwidthlist[wifiCtl.RADIO_5G].splice(i, 1);
            }
          }
        }
      }
      if (
        gcountryChanneldata.unsupport_40m_country_list_2_4g &&
        gcountryChanneldata.unsupport_40m_country_list_2_4g.indexOf(
          gWifiSecurityEx[getMainSsidIndex(radio)].WifiCountry
        ) > -1
      ) {
        var band40MList24g = bandwidthlist[wifiCtl.RADIO_2G].length;
        for (var i = 0; i < band40MList24g; i++) {
          if (bandwidthlist[wifiCtl.RADIO_2G][i] === "40") {
            bandwidthlist[wifiCtl.RADIO_2G].splice(i, 1);
          }
        }
      }
      if (
        gcountryChanneldata.unsupport_40m_country_list_5g &&
        gcountryChanneldata.unsupport_40m_country_list_5g.indexOf(
          gWifiSecurityEx[getMainSsidIndex(radio)].WifiCountry
        ) > -1
      ) {
        var band40MList5g = bandwidthlist[wifiCtl.RADIO_5G].length;
        for (var i = 0; i < band40MList5g; i++) {
          if (bandwidthlist[wifiCtl.RADIO_5G][i] === "40") {
            bandwidthlist[wifiCtl.RADIO_5G].splice(i, 1);
          }
        }
      }
      if (
        gcountryChanneldata.unsupport_80m_country_list_5g &&
        gcountryChanneldata.unsupport_80m_country_list_5g.indexOf(
          gWifiSecurityEx[getMainSsidIndex(radio)].WifiCountry
        ) > -1
      ) {
        var band80MList5g = bandwidthlist[wifiCtl.RADIO_5G].length;
        for (var i = 0; i < band80MList5g; i++) {
          if (bandwidthlist[wifiCtl.RADIO_5G][i] === "80") {
            bandwidthlist[wifiCtl.RADIO_5G].splice(i, 1);
          }
        }
      }
      for (var i = 0; i < bandwidthlist[radiov].length; i++) {
        var bandvalue = bandwidthlist[radiov][i];
        var value = {
          option: bandvalue,
          langid: "",
        };
        value.text = bandvalue + "MHz";
        if (bandvalue === "0") {
          value.text = publicLang["common_auto"];
          value.langid = "common_auto";
        }
        if (gProductType === "cpe" && bandvalue === "0") {
          value.text = publicLang["wifiadv.autodefalutband"];
          value.langid = "wifiadv.autodefalutband";
        }
        if (gProductType !== "cpe" && bandvalue === "20") {
          value.text = publicLang["wifiadv.defalutband"].replace(
            "%d",
            bandvalue
          );
          EMUI.LanguageController.registerLanguage(
            idlist[radiov] + "_item_" + (i + 1),
            "wifiadv.defalutband",
            bandvalue
          );
          var landvalid = idlist[radiov].replace("_list", "");
          EMUI.LanguageController.registerFunction(function () {
            if ($("#" + landvalid).val() === bandvalue) {
              showSelectedValue(landvalid, bandvalue);
            }
          });
        }
        addSelectItem(idlist[radiov], value);
      }
    }
  }
  function getChannellist(radio) {
    if (!EMUI.CountryChannel || !EMUI.CountryChannel.getCountryChannel) {
      return null;
    }
    var channellist = null;
    var country = gWifiSecurityEx[getMainSsidIndex(radio)].WifiCountry;
    var band = $("#wifiadv_5g_bandwidth").val();
    if (band === "") {
      band = gWifiSecurityEx[getMainSsidIndex(radio)].wifibandwidth;
    }
    channellist = EMUI.CountryChannel.getCountryChannel(
      country,
      radio,
      gProductType,
      band,
      gcountryChanneldata
    );
    channellist = $.makeArray(channellist);
    return channellist;
  }
  function showPrompt(divid, messageid) {
    $(divid + "_div").show();
    $(divid).attr("lang-id", messageid);
    if (typeof publicLang !== "undefined") {
      var msgcontent = publicLang[messageid];
      $(divid).text(msgcontent);
    }
  }
  function isDFSChannel(channle) {
    if ((channle > 51 && channle < 65) || (channle > 99 && channle < 141)) {
      return true;
    }
    return false;
  }
  function showChannelPrompt() {
    var currentchannel = $("#wifiadv_5g_channel").val();
    $("#wifiadv_5g_channel_prompt_div").hide();
    if (isDFSChannel(currentchannel)) {
      showPrompt("#wifiadv_5g_channel_prompt", "wifiadv.dfsprompt");
    }
    if (
      EMUI.CountryChannel &&
      EMUI.CountryChannel.isIndoorChannel(currentchannel)
    ) {
      showPrompt("#wifiadv_5g_channel_prompt", "wifiadv.indoorprompt");
    }
    return;
  }
  function init24gChannelAutoApti(radio, currentchannel) {
    if (
      radio === wifiCtl.RADIO_2G &&
      gWifiFeatureSwitch.channel_optimize_enable === "1"
    ) {
      if (gWifiSecurityEx[wifiCtl.RADIO_2G].WifiChannelAutoOptimize === "1") {
        $("#wifiadv_autoApti_check")
          .addClass("check_on")
          .removeClass("check_off");
        $("#wifiadv_2g_channel").removeAttr("onclick");
        $("#wifiadv_2g_channel")
          .addClass("select_on_normal_disable")
          .removeClass("select_on_normal");
        $("#wifiadv_2g_channel_div div").css("color", "#c1c1c1");
        $("#wifiadv_autoApti_prompt_div").show();
      } else {
        $("#wifiadv_autoApti_check")
          .addClass("check_off")
          .removeClass("check_on");
        $("#wifiadv_2g_channel").attr("onclick", "SelectItem(this)");
        $("#wifiadv_2g_channel_div div").css("color", "#000000");
        $("#wifiadv_autoApti_prompt_div").hide();
      }
      $("#wifiadv_atuoApti_div").show();
    }
  }
  function initChannel(radio, currentchannel) {
    if (!EMUI.CountryChannel) {
      setTimeout(function () {
        initChannel(radio, currentchannel);
      }, 500);
      return;
    }
    var id = ["wifiadv_2g_channel", "wifiadv_5g_channel"];
    var channellist = getChannellist(radio);
    $("#" + id[radio] + "_div").show();
    if (radio === wifiCtl.RADIO_5G && gWifiConfigure.autochannel5g === "1") {
      showChannellist(radio, []);
      showSelectedValue(id[radio], "0");
      $("#" + id[radio]).attr("disabled", true);
      $("#" + id[radio]).removeAttr("onclick");
      return;
    }
    if (
      wifiCtl.isDbdcChip(gWifiFeatureSwitch) &&
      getSwitchStatus(wifiCtl.RADIO_2G) === "1" &&
      getSwitchStatus(wifiCtl.RADIO_5G) === "1"
    ) {
      deletDFSChannel(channellist);
    }
    if (gProductType === "cpe" && radio === wifiCtl.RADIO_2G) {
      deletForbidChannel(channellist);
    }
    showChannellist(radio, channellist);
    showSelectedValue(id[radio], currentchannel);
    if (
      EMUI.globalStatusController.content.response.WifiConnectionStatus &&
      EMUI.globalStatusController.content.response.WifiConnectionStatus ===
        "901"
    ) {
      $("#" + id[radio]).attr("disabled", true);
      $("#" + id[radio]).removeAttr("onclick");
    }
    if (radio === wifiCtl.RADIO_5G) {
      showChannelPrompt();
    }
    init24gChannelAutoApti(radio, currentchannel);
    return;
    function showChannellist(radiov, channellistv) {
      var listid = ["wifiadv_2g_channel_list", "wifiadv_5g_channel_list"];
      clearSelectItme(listid[radiov]);
      var auto = {
        option: "0",
        langid: "common_auto",
        text: publicLang["common_auto"],
      };
      addSelectItem(listid[radiov], auto);
      var channel;
      for (channel in channellistv) {
        if (
          channellistv.hasOwnProperty(channel) &&
          "0" !== channellistv[channel] + ""
        ) {
          var value = {
            option: channellistv[channel],
            langid: "",
            text: channellistv[channel],
          };
          addSelectItem(listid[radiov], value);
        }
      }
    }
    function deletDFSChannel(channels) {
      for (var i = 0; i < channels.length; i++) {
        if (isDFSChannel(channels[i])) {
          channels.splice(i, 1);
          i--;
        }
      }
    }
    function deletForbidChannel(channels) {
      if (!EMUI.CountryChannel) {
        return;
      }
      for (var i = 0; i < channels.length; i++) {
        if (EMUI.CountryChannel.isFobidChannel(channels[i])) {
          channels.splice(i, 1);
          i--;
        }
      }
    }
  }
  function initMaxassco(radio) {
    var id = ["#wifiadv_2g_maxassociate", "#wifiadv_5g_maxassociate"];
    if (
      !gWifiFeatureSwitch.show_maxassoc ||
      gWifiFeatureSwitch.show_maxassoc !== "2"
    ) {
      $(id[radio] + "_div").hide();
      return;
    }
    if (wifiCtl.isDbdcChip(gWifiFeatureSwitch)) {
      $(id[radio] + "_div").hide();
      $("#wifiadv_dbdc_maxassociate_div").show();
      $("#wifiadv_dbdc_maxassociate").attr(
        "placeholder",
        "1-" + gWifiFeatureSwitch.wifi_chip_maxassoc
      );
      $("#wifiadv_dbdc_maxassociate").val(gWifiBasicData[0].wifi_max_assoc);
    } else {
      $(id[radio] + "_div").show();
      $("#wifiadv_dbdc_maxassociate_div").hide();
      $(id[radio]).attr(
        "placeholder",
        "1-" + gWifiFeatureSwitch.wifi_chip_maxassoc
      );
      $(id[radio]).val(gWifiBasicData[getMainSsidIndex(radio)].wifi_max_assoc);
    }
  }
  function initChipPara(radio) {
    initMaxassco(radio);
    initMode(radio, gWifiSecurityEx[getMainSsidIndex(radio)].WifiMode);
    initBandWidth(
      radio,
      gWifiSecurityEx[getMainSsidIndex(radio)].wifibandwidth
    );
    initChannel(radio, gWifiSecurityEx[getMainSsidIndex(radio)].WifiChannel);
  }
  function checkSingleChip5Gon() {
    if (wifiCtl.is5gRestirct(gWifiFeatureSwitch, gmonitorstatus, gpinstatus)) {
      return "wlan_5gunuseble_network";
    }
    if (gWifiFeatureSwitch.doubleap5g_enable === "0") {
      if (wifiCtl.isGuestwifiOpen(gWifiFeatureSwitch, gWifiBasicData)) {
        return "wifiadv.5gdisable_guestwifi";
      }
      if (wifiCtl.isSecondarySsidOpen(gWifiFeatureSwitch, gWifiBasicData)) {
        return "wlan_5gunuseble_secondwifi";
      }
    }
    return null;
  }
  function initSingleChip() {
    $("#wifiadv_frequency_div").hide();
    $("#wifiadv_firstline").show();
    $(".wifiadv_title").hide();
    var frequency = wifiCtl.getSingleChipFrequency(gWifiSecurityEx[0].WifiMode);
    if (gWifiFeatureSwitch.wifi5g_enabled === "1") {
      $("#wifiadv_frequency_div").show();
      showSelectedValue("wifiadv_frequency", frequency.toString());
      $("#wifiadv_frequency_prompt_div").hide();
      if (frequency === wifiCtl.RADIO_2G) {
        var errormsg = checkSingleChip5Gon();
        if (errormsg !== null) {
          $("#wifiadv_frequency").removeAttr("onclick");
          showPrompt("#wifiadv_frequency_prompt", errormsg);
        }
      }
      if (frequency === wifiCtl.RADIO_5G) {
        showPrompt("#wifiadv_frequency_prompt", "wifiadv.5gwarn");
        if (
          gWifiFeatureSwitch.pmf_enable &&
          gWifiFeatureSwitch.pmf_enable === "2"
        ) {
          $("#wifiadv_pmf_div").show();
        }
      }
      var classvalue = ["check_off", "check_on"];
      $("#wifiadv_pmf_check").removeClass(classvalue[0]);
      $("#wifiadv_pmf_check").removeClass(classvalue[1]);
      $("#wifiadv_pmf_check").addClass(
        classvalue[
          gWifiSecurityEx[getMainSsidIndex(wifiCtl.RADIO_5G)].pmf_switch
        ]
      );
    }
    var id = ["#wifiadv_2g", "#wifiadv_5g"];
    $(id[0]).hide();
    $(id[1]).hide();
    $(id[frequency]).show();
    initChipPara(frequency);
  }
  function initDoubleChip() {
    $("#wifiadv_frequency_div").hide();
    $(".wifiadv_title").show();
    if (getSwitchStatus(wifiCtl.RADIO_2G) === "0") {
      EMUI.LanguageController.registerLanguageEx(
        "wifiadv_2g_prompt",
        "wifiadv.wifi2gdisable",
        "%l",
        "menu.wifieasy",
        "#wifieasy"
      );
      EMUI.LanguageController.transLangEx();
      $("#wifiadv_2g_prompt").show();
      $("#wifiadv_2g_content").hide();
    } else {
      $("#wifiadv_2g_prompt").hide();
      $("#wifiadv_2g_content").show();
      initChipPara(wifiCtl.RADIO_2G);
    }
    if (getSwitchStatus(wifiCtl.RADIO_5G) === "0") {
      EMUI.LanguageController.registerLanguageEx(
        "wifiadv_5g_prompt",
        "wifiadv.wifi5gdisable",
        "%l",
        "menu.wifieasy",
        "#wifieasy"
      );
      EMUI.LanguageController.transLangEx();
      $("#wifiadv_5g_prompt").show();
      $("#wifiadv_5g_content").hide();
    } else {
      $("#wifiadv_5g_prompt").hide();
      $("#wifiadv_5g_content").show();
      initChipPara(wifiCtl.RADIO_5G);
      if (
        gWifiFeatureSwitch.pmf_enable &&
        gWifiFeatureSwitch.pmf_enable === "2"
      ) {
        $("#wifiadv_pmf_div").show();
        var classvalue = ["check_off", "check_on"];
        $("#wifiadv_pmf_check").removeClass(classvalue[0]);
        $("#wifiadv_pmf_check").removeClass(classvalue[1]);
        $("#wifiadv_pmf_check").addClass(
          classvalue[
            gWifiSecurityEx[getMainSsidIndex(wifiCtl.RADIO_5G)].pmf_switch
          ]
        );
      }
    }
  }
  function showAndAdjustMacFont() {
    var targetId = $("#wifiadv_lcdshow");
    var selectvalue = targetId.attr("value");
    var description = targetId.text();
    var langid = targetId.attr("lang-id");
    targetId.attr("title", "");
    targetId.secureHtml(
      '<div style="width: 300px" id="wifiadv_lcdshow_content"><div>'
    );
    var targetContentId = $("#wifiadv_lcdshow_content");
    targetContentId.css({ "font-size": "14px", overflow: "visible" });
    targetContentId.attr("class", "wordbreak");
    targetContentId.text(description);
    targetContentId.attr("lang-id", langid);
    targetContentId.attr("value", selectvalue);
    var contentHeight = targetContentId.height();
    if (contentHeight > 32) {
      targetContentId.css("font-size", "13px");
      contentHeight = targetContentId.height();
    }
    if (contentHeight > 32) {
      targetContentId.css("font-size", "12px");
      contentHeight = targetContentId.height();
    }
    if (contentHeight > 32) {
      targetContentId.css({ overflow: "hidden", "text-overflow": "ellipsis" });
      targetContentId.attr("class", "keepline");
      targetId.attr("title", obj.date);
    }
  }
  function initWifioffTimeSelect() {
    if (gwifioffTime.length > 0) {
      return;
    }
    var content = "";
    var templateData = "";
    if (
      GLOBAL.config.wifioff_choice &&
      GLOBAL.config.wifioff_choice.enable === "1"
    ) {
      delete GLOBAL.config.wifioff_choice.enable;
      for (var value in GLOBAL.config.wifioff_choice) {
        gwifioffTime.push(GLOBAL.config.wifioff_choice[value]);
      }
    } else {
      gwifioffTime = [600, 1200, 1800];
    }
    gwifioffTimeLength = gwifioffTime.length;
    for (var i = 0; i < gwifioffTime.length; i++) {
      templateData = {
        j: i + 2,
        wifioffValue: gwifioffTime[i],
        Wifiofftimebyconfig: gwifioffTime[i] / 60,
      };
      if (gwifioffTime[i] !== "1") {
        content =
          '<div id="wifiadv_autoofftime_list_item_' +
          '{{j}}" option="{{wifioffValue}}" class="select_medium">{{Wifiofftimebyconfig}}</div>';
        $("#wifiadv_autoofftime_list").secureAppend(content, templateData);
      } else {
        gwifioffTimeLength -= 1;
      }
    }
  }
  function initCommon() {
    $("#wifiadv_autoofftime_div").hide();
    if (
      GLOBAL.config.battery_enabled &&
      GLOBAL.config.battery_enabled === "1"
    ) {
      if (gwifioffTimeLength !== 0) {
        $("#wifiadv_autoofftime_div").show();
        $("#wifiadv_firstline").show();
        var offtime = "0";
        if (gWifiSecurityEx[0].Wifioffenable !== "0") {
          offtime = gWifiSecurityEx[0].Wifiofftime;
        }
        showSelectedValue("wifiadv_autoofftime", offtime);
      }
    }
    $("#wifiadv_pmf_div").hide();
    if (
      gWifiFeatureSwitch.pmf_enable &&
      gWifiFeatureSwitch.pmf_enable === "1"
    ) {
      $("#wifiadv_pmf_div").show();
      $("#wifiadv_firstline").show();
      var classvalue = ["check_off", "check_on"];
      $("#wifiadv_pmf_check").removeClass(classvalue[0]);
      $("#wifiadv_pmf_check").removeClass(classvalue[1]);
      $("#wifiadv_pmf_check").addClass(
        classvalue[gWifiSecurityEx[0].pmf_switch]
      );
    }
    $("#wifiadv_lcdshow_div").hide();
    if (
      gWifiFeatureSwitch.showssid_enable &&
      gWifiFeatureSwitch.showssid_enable === "1"
    ) {
      $("#wifiadv_lcdshow_div").show();
      $("#wifiadv_firstline").show();
      if (!$("#wifiadv_lcdshow_div").hasClass("registerFunction")) {
        $("#wifiadv_lcdshow_div").addClass("registerFunction");
        EMUI.LanguageController.registerFunction(function () {
          if (window.location.hash === "#wifiadvanced") {
            showAndAdjustMacFont();
          }
        });
      }
      setTimeout(showAndAdjustMacFont, 0);
    }
  }
  function initPage() {
    if (
      getSwitchStatus(wifiCtl.RADIO_2G) === "0" &&
      getSwitchStatus(wifiCtl.RADIO_5G) === "0"
    ) {
      EMUI.LanguageController.registerLanguageEx(
        "wifiadv_prompt",
        "wifiadv.wifidisable",
        "%l",
        "menu.wifieasy",
        "#wifieasy"
      );
      EMUI.LanguageController.transLangEx();
      $("#wifiadv_prompt").show();
      $("#wifiadv_content").hide();
      return;
    }
    $("#wifiadv_prompt").hide();
    $("#wifiadv_content").show();
    $("#wifiadv_btn_save").addClass("btn_disabled");
    initWifioffTimeSelect();
    initCommon();
    if (wifiCtl.isSingleChip(gWifiFeatureSwitch)) {
      initSingleChip();
      return;
    }
    initDoubleChip();
    return;
  }
  var fistTime = true;
  function init() {
    wifiCtl = EMUI.wifiObjCtrl;
    loadData();
    initPage();
    if (fistTime) {
      fistTime = false;
      bindEvents();
    }
  }
  return { init: init };
})();
window.wifiadvancedRenderPage = function () {
  wifiadvController.init();
};

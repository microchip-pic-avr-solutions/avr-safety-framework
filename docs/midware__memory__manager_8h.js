var midware__memory__manager_8h =
[
    [ "eccAllOnes_t", "group__memory__manager.html#gaaaf10864c09e3c796728668be2028eae", [
      [ "ECC_ALL_ONES_NONE", "group__memory__manager.html#ggaaaf10864c09e3c796728668be2028eaeaac7af5f5fe0b04c48adccf355cb32599", null ],
      [ "ECC_ALL_ONES_ALL_FLASH", "group__memory__manager.html#ggaaaf10864c09e3c796728668be2028eaea5a5ca5d44995da64508abe2721a7463b", null ],
      [ "ECC_ALL_ONES_USER_DATA", "group__memory__manager.html#ggaaaf10864c09e3c796728668be2028eaea0f42b757a27dca89e56ec79bd9521621", null ],
      [ "ECC_ALL_ONES_APPDATA_EEPROM", "group__memory__manager.html#ggaaaf10864c09e3c796728668be2028eaea1005a8513c8e6189f7c6a96ab02b98ab", null ],
      [ "ECC_ALL_ONES_MAX", "group__memory__manager.html#ggaaaf10864c09e3c796728668be2028eaeaf5885fb596e498f3c26768f9adecc91a", null ]
    ] ],
    [ "persistentFlag_t", "group__memory__manager.html#ga6ac3fae43818006d63db986906a96e65", [
      [ "PFLAG_ERRINJ_ONGOING", "group__memory__manager.html#gga6ac3fae43818006d63db986906a96e65a1608137564dfd2dbcaefefb7f539e8f8", null ],
      [ "PFLAG_CPU_INJ_FAULT", "group__memory__manager.html#gga6ac3fae43818006d63db986906a96e65aa37e99ddc61eea5439645d1b3cc003cc", null ],
      [ "PFLAG_WDT_INJ_FAULT", "group__memory__manager.html#gga6ac3fae43818006d63db986906a96e65a14c565d4579b4bf25f2a0a1b641fbeb3", null ],
      [ "PFLAG_SWDT_INJ_FAULT", "group__memory__manager.html#gga6ac3fae43818006d63db986906a96e65ae3581f418fb95f677c3565b80973b8f2", null ],
      [ "PFLAG_IO_FLOAT_FAULT", "group__memory__manager.html#gga6ac3fae43818006d63db986906a96e65a7b78b793e7b3115cd8b2e862344f4435", null ],
      [ "PFLAG_MAX", "group__memory__manager.html#gga6ac3fae43818006d63db986906a96e65a1417e5a5468d5a6ca7cda442a8fef58b", null ]
    ] ],
    [ "persistentVal_t", "group__memory__manager.html#ga35e098390d8349996dcc2bcfe5461450", [
      [ "PVAL_ERRID_REASON", "group__memory__manager.html#gga35e098390d8349996dcc2bcfe5461450aceede39984ce9c9c9fefda70983407a6", null ],
      [ "PVAL_RESET_REASON", "group__memory__manager.html#gga35e098390d8349996dcc2bcfe5461450a3d4fa9732c8e8f83fe0f451f6368271b", null ],
      [ "PVAL_ERRINJ_REASON", "group__memory__manager.html#gga35e098390d8349996dcc2bcfe5461450ac03e21cd8e9b0f5f68ccc0358c019bb2", null ],
      [ "PVAL_MAX", "group__memory__manager.html#gga35e098390d8349996dcc2bcfe5461450a7ce98cf91ef32e74d65ac8ab0c6f84b7", null ]
    ] ],
    [ "MW_ClearPersistentFlags", "group__memory__manager.html#ga8b90f615924b9b82a5ee19da57d0d794", null ],
    [ "MW_ClearPersistentVals", "group__memory__manager.html#ga21ac0a2a9a132045648a676323529fa2", null ],
    [ "MW_GetClearBusError", "group__memory__manager.html#gaf5934ca219c4e563112d074d56821a6b", null ],
    [ "MW_GetClearCpuDataParityError", "group__memory__manager.html#ga64d802b5f3942be7e80e8544e1ed31be", null ],
    [ "MW_GetClearCpuInstrParityError", "group__memory__manager.html#ga952836eb1557790f92a2de909adc52fb", null ],
    [ "MW_GetClearCpuOpcodeError", "group__memory__manager.html#gac71ea527121e05a4d21bf3896a55e4fa", null ],
    [ "MW_GetClearNvmEccCompError", "group__memory__manager.html#ga6e9d5ea87528a7712599014154870aa2", null ],
    [ "MW_GetClearNvmEepromEcc1Error", "group__memory__manager.html#gab9a52e0ec30c5ffc28cf9478fa9945a0", null ],
    [ "MW_GetClearNvmEepromEcc2Error", "group__memory__manager.html#ga455f43e8ea09e0d218327b3a0a7f663a", null ],
    [ "MW_GetClearNvmFlashEcc1Error", "group__memory__manager.html#ga45bbe7298efed7194e8256fecffd613d", null ],
    [ "MW_GetClearNvmFlashEcc2Error", "group__memory__manager.html#gabf7a8fbf784c83cc7d1460b0760d8c7a", null ],
    [ "MW_GetClearNvmParityError", "group__memory__manager.html#gabee835924a435ec98bc27870dc864ca7", null ],
    [ "MW_GetClearRamEcc1Error", "group__memory__manager.html#gaefb65d6cd7e957648b5ab3c4db24b1e7", null ],
    [ "MW_GetClearRamEcc2Error", "group__memory__manager.html#gafc03be8c13617d3d6c9a49255cf17693", null ],
    [ "MW_GetClearRamEccCompError", "group__memory__manager.html#gae41207756bb030ccb2162ee50c9065b3", null ],
    [ "MW_GetClearRamParityError", "group__memory__manager.html#ga405dbbcc5a47e9f6bdead008c40e8082", null ],
    [ "MW_GetClearRamStackError", "group__memory__manager.html#gad728a95b784313efe2129f49658f8aad", null ],
    [ "MW_GetPersistentFlag", "group__memory__manager.html#ga51415dcf4d1f2d4dc52707dfa3fd347b", null ],
    [ "MW_GetPersistentVal", "group__memory__manager.html#gaa56bf0b58b937f3119150d05db80f063", null ],
    [ "MW_IsPersistentFlagsCorrupt", "group__memory__manager.html#ga615a1520e43b6a191a7d62b7239a9c64", null ],
    [ "MW_IsPersistentValsCorrupt", "group__memory__manager.html#gaa710d73ca145fde751841820388ded66", null ],
    [ "MW_SetNvmEccAllOnes", "group__memory__manager.html#ga7b4b8073e4325c35b3f9ca4022354742", null ],
    [ "MW_SetRamStackLimit", "group__memory__manager.html#ga32055217e20ee25aa0c9c420a850776c", null ],
    [ "MW_StorePersistentFlag", "group__memory__manager.html#ga485ad75797acb2ef94989c29f34ee09d", null ],
    [ "MW_StorePersistentVal", "group__memory__manager.html#ga288fde0388a5c29a2aeaaa4ae961dd66", null ]
];
################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Each subdirectory must supply rules for building sources it contributes
ICallBLE/ble_user_config.obj: C:/ti/simplelink/ble_sdk_2_02_00_31/src/icall/app/ble_user_config.c $(GEN_OPTS) $(GEN_HDRS)
	@echo 'Building file: $<'
	@echo 'Invoking: ARM Compiler'
	"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/bin/armcl" --cmd_file="C:/ti/simplelink/ble_sdk_2_02_00_31/examples/cc2650stk/simple_peripheral/ccs/app/../../iar/stack/../../../../../src/config/build_components.opt" --cmd_file="C:/ti/simplelink/ble_sdk_2_02_00_31/examples/cc2650stk/simple_peripheral/ccs/app/../../iar/stack/build_config.opt" --cmd_file="C:/ti/simplelink/ble_sdk_2_02_00_31/examples/cc2650stk/simple_peripheral/ccs/app/../../iar/stack/../../ccs/config/ccs_compiler_defines.bcfg"  -mv7M3 --code_state=16 -me -O4 --opt_for_speed=0 --include_path="C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/include" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/examples/simple_peripheral/cc26xx/app" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/icall/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/roles/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/roles" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/dev_info" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/oad/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/simple_profile/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/simple_profile" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/common/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/heapmgr" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/controller/cc26xx/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/hal/src/target/_common" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/target" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/hal/src/target/_common/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/hal/src/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/osal/src/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/services/src/sdata" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/services/src/saddr" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/icall/src/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/inc" --include_path="C:/ti/tirtos_cc13xx_cc26xx_2_18_00_03/products/cc26xxware_2_23_03_17162" --include_path="C:/ti/tirtos_cc13xx_cc26xx_2_18_00_03/products/tidrivers_cc13xx_cc26xx_2_16_01_13/packages/ti/mw/extflash" --define=USE_ICALL --define=POWER_SAVING --define=FEATURE_OAD --define=HAL_IMAGE_E --define=SBP_TASK_STACK_SIZE=700 --define=GAPROLE_TASK_STACK_SIZE=520 --define=HEAPMGR_SIZE=0 --define=ICALL_MAX_NUM_TASKS=3 --define=ICALL_MAX_NUM_ENTITIES=6 --define=xdc_runtime_Assert_DISABLE_ALL --define=xdc_runtime_Log_DISABLE_ALL --define=MAX_NUM_BLE_CONNS=1 --define=SENSORTAG_HW --define=CC2650STK --define=CC26XX --define=Display_DISABLE_ALL -g --c99 --gcc --diag_suppress=48 --diag_warning=225 --diag_wrap=off --display_error_number --gen_func_subsections=on --abi=eabi --preproc_with_compile --preproc_dependency="ICallBLE/ble_user_config.d" --obj_directory="ICallBLE" $(GEN_OPTS__FLAG) "$<"
	@echo 'Finished building: $<'
	@echo ' '

ICallBLE/icall_api.obj: C:/ti/simplelink/ble_sdk_2_02_00_31/src/icall/app/icall_api.c $(GEN_OPTS) $(GEN_HDRS)
	@echo 'Building file: $<'
	@echo 'Invoking: ARM Compiler'
	"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/bin/armcl" --cmd_file="C:/ti/simplelink/ble_sdk_2_02_00_31/examples/cc2650stk/simple_peripheral/ccs/app/../../iar/stack/../../../../../src/config/build_components.opt" --cmd_file="C:/ti/simplelink/ble_sdk_2_02_00_31/examples/cc2650stk/simple_peripheral/ccs/app/../../iar/stack/build_config.opt" --cmd_file="C:/ti/simplelink/ble_sdk_2_02_00_31/examples/cc2650stk/simple_peripheral/ccs/app/../../iar/stack/../../ccs/config/ccs_compiler_defines.bcfg"  -mv7M3 --code_state=16 -me -O4 --opt_for_speed=0 --include_path="C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/include" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/examples/simple_peripheral/cc26xx/app" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/icall/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/roles/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/roles" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/dev_info" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/oad/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/simple_profile/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/profiles/simple_profile" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/common/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/heapmgr" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/controller/cc26xx/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/hal/src/target/_common" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/target" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/hal/src/target/_common/cc26xx" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/hal/src/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/osal/src/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/services/src/sdata" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/services/src/saddr" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/components/icall/src/inc" --include_path="C:/ti/simplelink/ble_sdk_2_02_00_31/src/inc" --include_path="C:/ti/tirtos_cc13xx_cc26xx_2_18_00_03/products/cc26xxware_2_23_03_17162" --include_path="C:/ti/tirtos_cc13xx_cc26xx_2_18_00_03/products/tidrivers_cc13xx_cc26xx_2_16_01_13/packages/ti/mw/extflash" --define=USE_ICALL --define=POWER_SAVING --define=FEATURE_OAD --define=HAL_IMAGE_E --define=SBP_TASK_STACK_SIZE=700 --define=GAPROLE_TASK_STACK_SIZE=520 --define=HEAPMGR_SIZE=0 --define=ICALL_MAX_NUM_TASKS=3 --define=ICALL_MAX_NUM_ENTITIES=6 --define=xdc_runtime_Assert_DISABLE_ALL --define=xdc_runtime_Log_DISABLE_ALL --define=MAX_NUM_BLE_CONNS=1 --define=SENSORTAG_HW --define=CC2650STK --define=CC26XX --define=Display_DISABLE_ALL -g --c99 --gcc --diag_suppress=48 --diag_warning=225 --diag_wrap=off --display_error_number --gen_func_subsections=on --abi=eabi --preproc_with_compile --preproc_dependency="ICallBLE/icall_api.d" --obj_directory="ICallBLE" $(GEN_OPTS__FLAG) "$<"
	@echo 'Finished building: $<'
	@echo ' '



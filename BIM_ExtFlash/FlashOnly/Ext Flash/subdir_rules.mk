################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Each subdirectory must supply rules for building sources it contributes
Ext\ Flash/ext_flash.obj: C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Projects/ble/util/BIM_extflash/CC26xx/Source/CC26XXST_0120/ext_flash.c $(GEN_OPTS) $(GEN_HDRS)
	@echo 'Building file: $<'
	@echo 'Invoking: ARM Compiler'
	"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/bin/armcl" -mv7M3 --code_state=16 -me --include_path="C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/include" --include_path="C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Projects/ble/util/BIM_extflash/CC26xx/Source" --include_path="C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Projects/ble/util/BIM_extflash/CC26xx/Source/CC26XXST_0120" --include_path="C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Projects/ble/Profiles/OAD/CC26xx" --include_path="C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Components/hal/target/CC2650TIRTOS" --include_path="C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Components/hal/target/_common/cc26xx" --include_path="C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Components/hal/include" --include_path="C:/ti/tirtos_simplelink_2_13_00_06/products/cc26xxware_2_21_01_15600" --include_path="C:/ti/tirtos_simplelink_2_13_00_06/products/cc26xxware_2_21_01_15600/driverlib" --include_path="C:/ti/tirtos_simplelink_2_13_00_06/products/cc26xxware_2_21_01_15600/inc" --define=CC2650ST_0120 --define=KEEP_INTVECS --define=BOOT_LOADER --define=xNO_COPY --define=ccs --define=DEBUG -g --diag_warning=225 --diag_wrap=off --display_error_number --abi=eabi --preproc_with_compile --preproc_dependency="Ext Flash/ext_flash.d" --obj_directory="Ext Flash" $(GEN_OPTS__FLAG) "$<"
	@echo 'Finished building: $<'
	@echo ' '



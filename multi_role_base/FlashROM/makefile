################################################################################
# Automatically-generated file. Do not edit!
################################################################################

SHELL = cmd.exe

CG_TOOL_ROOT := C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS

GEN_OPTS__FLAG := --cmd_file="configPkg/compiler.opt"
GEN_CMDS__FLAG := -l"configPkg/linker.cmd"

ORDERED_OBJS += \
"C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Projects/ble/SimpleBLEMulti/CC26xx/CCS/Config/ccsLinkerDefines.cmd" \
"C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Projects/ble/common/cc26xx/CCS/cc26xx_ble_app.cmd" \
"./Application/board_key.obj" \
"./Application/board_lcd.obj" \
"./Application/multi_role_base.obj" \
"./Application/simple_UART.obj" \
"./Application/util.obj" \
"./Drivers/LCD/LCDDogm1286.obj" \
"./Drivers/LCD/LCDDogm1286_util.obj" \
"./Drivers/PIN/PINCC26XX.obj" \
"./Drivers/SPI/SPI.obj" \
"./Drivers/SPI/SPICC26XXDMA.obj" \
"./Drivers/UART/UART.obj" \
"./Drivers/UART/UARTCC26XX.obj" \
"./Drivers/UDMA/UDMACC26XX.obj" \
"./ICall/ICall.obj" \
"./ICall/ICallCC2650.obj" \
"./ICallBLE/ICallBleAPI.obj" \
"./ICallBLE/bleUserConfig.obj" \
"./PROFILES/devinfoservice.obj" \
"./PROFILES/gatt_uuid.obj" \
"./PROFILES/gattservapp_util.obj" \
"./PROFILES/multi.obj" \
"./PROFILES/simpleGATTprofile.obj" \
"./Startup/Board.obj" \
"./Startup/ccfg_appBLE.obj" \
"./Startup/main.obj" \
$(GEN_CMDS__FLAG) \
-llibc.a \
-l"C:/ti/tirtos_simplelink_2_13_00_06/products/cc26xxware_2_21_01_15600/driverlib/bin/ccs/driverlib.lib" \

-include ../makefile.init

RM := DEL /F
RMDIR := RMDIR /S/Q

# All of the sources participating in the build are defined here
-include sources.mk
-include Application/subdir_vars.mk
-include Drivers/LCD/subdir_vars.mk
-include Drivers/PIN/subdir_vars.mk
-include Drivers/SPI/subdir_vars.mk
-include Drivers/UART/subdir_vars.mk
-include Drivers/UDMA/subdir_vars.mk
-include ICall/subdir_vars.mk
-include ICallBLE/subdir_vars.mk
-include PROFILES/subdir_vars.mk
-include Startup/subdir_vars.mk
-include TOOLS/subdir_vars.mk
-include Application/subdir_rules.mk
-include Drivers/LCD/subdir_rules.mk
-include Drivers/PIN/subdir_rules.mk
-include Drivers/SPI/subdir_rules.mk
-include Drivers/UART/subdir_rules.mk
-include Drivers/UDMA/subdir_rules.mk
-include ICall/subdir_rules.mk
-include ICallBLE/subdir_rules.mk
-include PROFILES/subdir_rules.mk
-include Startup/subdir_rules.mk
-include TOOLS/subdir_rules.mk
-include objects.mk

ifneq ($(MAKECMDGOALS),clean)
ifneq ($(strip $(S_DEPS)),)
-include $(S_DEPS)
endif
ifneq ($(strip $(S_UPPER_DEPS)),)
-include $(S_UPPER_DEPS)
endif
ifneq ($(strip $(S62_DEPS)),)
-include $(S62_DEPS)
endif
ifneq ($(strip $(C64_DEPS)),)
-include $(C64_DEPS)
endif
ifneq ($(strip $(ASM_DEPS)),)
-include $(ASM_DEPS)
endif
ifneq ($(strip $(CC_DEPS)),)
-include $(CC_DEPS)
endif
ifneq ($(strip $(SV7A_DEPS)),)
-include $(SV7A_DEPS)
endif
ifneq ($(strip $(S55_DEPS)),)
-include $(S55_DEPS)
endif
ifneq ($(strip $(C67_DEPS)),)
-include $(C67_DEPS)
endif
ifneq ($(strip $(CLA_DEPS)),)
-include $(CLA_DEPS)
endif
ifneq ($(strip $(C??_DEPS)),)
-include $(C??_DEPS)
endif
ifneq ($(strip $(CPP_DEPS)),)
-include $(CPP_DEPS)
endif
ifneq ($(strip $(S??_DEPS)),)
-include $(S??_DEPS)
endif
ifneq ($(strip $(C_DEPS)),)
-include $(C_DEPS)
endif
ifneq ($(strip $(C62_DEPS)),)
-include $(C62_DEPS)
endif
ifneq ($(strip $(CXX_DEPS)),)
-include $(CXX_DEPS)
endif
ifneq ($(strip $(C++_DEPS)),)
-include $(C++_DEPS)
endif
ifneq ($(strip $(ASM_UPPER_DEPS)),)
-include $(ASM_UPPER_DEPS)
endif
ifneq ($(strip $(K_DEPS)),)
-include $(K_DEPS)
endif
ifneq ($(strip $(C43_DEPS)),)
-include $(C43_DEPS)
endif
ifneq ($(strip $(INO_DEPS)),)
-include $(INO_DEPS)
endif
ifneq ($(strip $(S67_DEPS)),)
-include $(S67_DEPS)
endif
ifneq ($(strip $(SA_DEPS)),)
-include $(SA_DEPS)
endif
ifneq ($(strip $(S43_DEPS)),)
-include $(S43_DEPS)
endif
ifneq ($(strip $(OPT_DEPS)),)
-include $(OPT_DEPS)
endif
ifneq ($(strip $(PDE_DEPS)),)
-include $(PDE_DEPS)
endif
ifneq ($(strip $(S64_DEPS)),)
-include $(S64_DEPS)
endif
ifneq ($(strip $(C_UPPER_DEPS)),)
-include $(C_UPPER_DEPS)
endif
ifneq ($(strip $(C55_DEPS)),)
-include $(C55_DEPS)
endif
endif

-include ../makefile.defs

# Add inputs and outputs from these tool invocations to the build variables 
EXE_OUTPUTS += \
multi_role_base.out \

EXE_OUTPUTS__QUOTED += \
"multi_role_base.out" \

BIN_OUTPUTS += \
multi_role_base.hex \

BIN_OUTPUTS__QUOTED += \
"multi_role_base.hex" \


# All Target
all: multi_role_base.out

# Tool invocations
multi_role_base.out: $(OBJS) $(CMD_SRCS) $(GEN_CMDS)
	@echo 'Building target: $@'
	@echo 'Invoking: ARM Linker'
	"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/bin/armcl" --cmd_file="C:/ti/simplelink/ble_cc26xx_2_01_00_44423/Projects/ble/SimpleBLEMulti/CC26xx/CCS/multi_role/../../IAR/Application/CC2640/../../../CCS/Config/ccsCompilerDefines.bcfg"  -mv7M3 --code_state=16 -me -O4 --opt_for_speed=5 --define=USE_ICALL --define=POWER_SAVING --define=SBP_TASK_STACK_SIZE=700 --define=GAPROLE_TASK_STACK_SIZE=520 --define=GAP_ROLE_ABORT --define=TI_DRIVERS_SPI_DMA_INCLUDED --define=HEAPMGR_METRICS --define=TI_DRIVERS_LCD_INCLUDED --define=xdc_runtime_Assert_DISABLE_ALL --define=xdc_runtime_Log_DISABLE_ALL --define=CC26XXWARE --define=CC26XX --define=ccs --define=DEBUG --define=HEAPMGR_SIZE=3000 --define=MAX_NUM_BLE_CONNS=0 --define=ICALL_MAX_NUM_TASKS=4 --define=ICALL_MAX_NUM_ENTITIES=8 -g --gcc --diag_suppress=48 --diag_warning=225 --diag_wrap=off --display_error_number --gen_func_subsections=on --abi=eabi -z -m"multi_role_base.map" --heap_size=0 --stack_size=256 -i"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/lib" -i"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/include" --reread_libs --diag_suppress=10247-D --diag_wrap=off --display_error_number --warn_sections --xml_link_info="multi_role_base_linkInfo.xml" --rom_model --compress_dwarf=on --unused_section_elimination=on -o "multi_role_base.out" $(ORDERED_OBJS)
	@echo 'Finished building target: $@'
	@echo ' '
	@$(MAKE) --no-print-directory post-build

multi_role_base.hex: $(EXE_OUTPUTS)
	@echo 'Invoking: ARM Hex Utility'
	"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/bin/armhex" --memwidth=8 --romwidth=8 --intel -o "multi_role_base.hex" $(EXE_OUTPUTS__QUOTED)
	@echo 'Finished building: $@'
	@echo ' '
	@$(MAKE) --no-print-directory post-build

# Other Targets
clean:
	-$(RM) $(GEN_MISC_FILES__QUOTED)$(EXE_OUTPUTS__QUOTED)$(GEN_FILES__QUOTED)$(BIN_OUTPUTS__QUOTED)$(GEN_OPTS__QUOTED)$(GEN_CMDS__QUOTED)
	-$(RMDIR) $(GEN_MISC_DIRS__QUOTED)
	-$(RM) "Application\board_key.d" "Application\board_lcd.d" "Application\multi_role_base.d" "Application\simple_UART.d" "Application\util.d" "Drivers\LCD\LCDDogm1286.d" "Drivers\LCD\LCDDogm1286_util.d" "Drivers\PIN\PINCC26XX.d" "Drivers\SPI\SPI.d" "Drivers\SPI\SPICC26XXDMA.d" "Drivers\UART\UART.d" "Drivers\UART\UARTCC26XX.d" "Drivers\UDMA\UDMACC26XX.d" "ICall\ICall.d" "ICall\ICallCC2650.d" "ICallBLE\ICallBleAPI.d" "ICallBLE\bleUserConfig.d" "PROFILES\devinfoservice.d" "PROFILES\gatt_uuid.d" "PROFILES\gattservapp_util.d" "PROFILES\multi.d" "PROFILES\simpleGATTprofile.d" "Startup\Board.d" "Startup\ccfg_appBLE.d" "Startup\main.d" 
	-$(RM) "Application\board_key.obj" "Application\board_lcd.obj" "Application\multi_role_base.obj" "Application\simple_UART.obj" "Application\util.obj" "Drivers\LCD\LCDDogm1286.obj" "Drivers\LCD\LCDDogm1286_util.obj" "Drivers\PIN\PINCC26XX.obj" "Drivers\SPI\SPI.obj" "Drivers\SPI\SPICC26XXDMA.obj" "Drivers\UART\UART.obj" "Drivers\UART\UARTCC26XX.obj" "Drivers\UDMA\UDMACC26XX.obj" "ICall\ICall.obj" "ICall\ICallCC2650.obj" "ICallBLE\ICallBleAPI.obj" "ICallBLE\bleUserConfig.obj" "PROFILES\devinfoservice.obj" "PROFILES\gatt_uuid.obj" "PROFILES\gattservapp_util.obj" "PROFILES\multi.obj" "PROFILES\simpleGATTprofile.obj" "Startup\Board.obj" "Startup\ccfg_appBLE.obj" "Startup\main.obj" 
	-@echo 'Finished clean'
	-@echo ' '

post-build:
	-"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/bin/armhex" -order MS --memwidth=8 --romwidth=8 --intel -o "multi_role_base.hex" "multi_role_base.out"
	-@echo ' '

.PHONY: all clean dependents
.SECONDARY: post-build

-include ../makefile.targets


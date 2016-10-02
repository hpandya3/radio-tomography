################################################################################
# Automatically-generated file. Do not edit!
################################################################################

SHELL = cmd.exe

CG_TOOL_ROOT := C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS

GEN_OPTS__FLAG := 
GEN_CMDS__FLAG := 

ORDERED_OBJS += \
"./Application/baseloaderentry_ti.obj" \
"./Application/bim_main.obj" \
"./Application/bls_bsp.obj" \
"./Application/ccfg_app_ble.obj" \
"./Application/startup_ccs.obj" \
"./ExternalFlash/ext_flash.obj" \
"./SPI/bsp_spi.obj" \
"C:/ti/simplelink/ble_sdk_2_02_00_31/src/common/cc26xx/ccs/cc26xx_bim_ext_flash.cmd" \
$(GEN_CMDS__FLAG) \
-llibc.a \
-ldriverlib.lib \

-include ../makefile.init

RM := DEL /F
RMDIR := RMDIR /S/Q

# All of the sources participating in the build are defined here
-include sources.mk
-include Application/subdir_vars.mk
-include ExternalFlash/subdir_vars.mk
-include SPI/subdir_vars.mk
-include TOOLS/subdir_vars.mk
-include Application/subdir_rules.mk
-include ExternalFlash/subdir_rules.mk
-include SPI/subdir_rules.mk
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
bim_extflash.out \

EXE_OUTPUTS__QUOTED += \
"bim_extflash.out" \

BIN_OUTPUTS += \
bim_extflash.hex \

BIN_OUTPUTS__QUOTED += \
"bim_extflash.hex" \


# All Target
all: bim_extflash.out

# Tool invocations
bim_extflash.out: $(OBJS) $(GEN_CMDS)
	@echo 'Building target: $@'
	@echo 'Invoking: ARM Linker'
	"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/bin/armcl" -mv7M3 --code_state=16 -me --define=CC2650ST_0120 --define=BOOT_LOADER --define=xNO_COPY --define=ccs --define=DEBUG -g --c99 --diag_warning=225 --diag_wrap=off --display_error_number --gen_func_subsections=on --abi=eabi -z -m"bim_extflash.map" --heap_size=0 --stack_size=256 -i"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/lib" -i"C:/ti/tirtos_cc13xx_cc26xx_2_18_00_03/products/cc26xxware_2_23_03_17162/driverlib/bin/ccs/" -i"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/include" --reread_libs --define=KEEP_INTVECS=1 --diag_wrap=off --display_error_number --warn_sections --xml_link_info="bim_extflash_linkInfo.xml" --retain=BaseLoader_start --retain=LoadEntry --rom_model -o "bim_extflash.out" $(ORDERED_OBJS)
	@echo 'Finished building target: $@'
	@echo ' '
	@$(MAKE) --no-print-directory post-build

bim_extflash.hex: $(EXE_OUTPUTS)
	@echo 'Invoking: ARM Hex Utility'
	"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/bin/armhex" --memwidth=8 --romwidth=8 --intel -o "bim_extflash.hex" $(EXE_OUTPUTS__QUOTED)
	@echo 'Finished building: $@'
	@echo ' '
	@$(MAKE) --no-print-directory post-build

# Other Targets
clean:
	-$(RM) $(EXE_OUTPUTS__QUOTED)$(BIN_OUTPUTS__QUOTED)
	-$(RM) "Application\bim_main.d" "Application\bls_bsp.d" "Application\ccfg_app_ble.d" "Application\startup_ccs.d" "ExternalFlash\ext_flash.d" "SPI\bsp_SPI.d" 
	-$(RM) "Application\baseloaderentry_ti.d" 
	-$(RM) "Application\baseloaderentry_ti.obj" "Application\bim_main.obj" "Application\bls_bsp.obj" "Application\ccfg_app_ble.obj" "Application\startup_ccs.obj" "ExternalFlash\ext_flash.obj" "SPI\bsp_spi.obj" 
	-@echo 'Finished clean'
	-@echo ' '

post-build:
	-"C:/ti/ccsv6/tools/compiler/ti-cgt-arm_16.6.0.STS/bin/armhex"  -order MS --memwidth=8 --romwidth=8 --intel -o "bim_extflash.hex" "bim_extflash"
	-@echo ' '

.PHONY: all clean dependents
.SECONDARY: post-build

-include ../makefile.targets


<?php
class Iksanika_Productrelater_Test_Config_Module extends EcomDev_PHPUnit_Test_Case_Config
{
    public function testModuleParams()
    {
        $this->assertModuleCodePool("community");
        $this->assertModuleVersion("1.1.4");
    }
}

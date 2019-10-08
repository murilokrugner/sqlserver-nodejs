/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCF010', {
    VCF_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VCF_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCF_LOJCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VCF_CODSEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCF_NIVIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    VCF_AREVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    VCF_OFIPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VCF_QTDMEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_USASTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VCF_VALSTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_QTDFR3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_PERFT3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_PERVC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_RECBRU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_RECVIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                           '
    },
    VCF_SOCIO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_SOCIO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_SOCIO3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_EMPCO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_EMPCO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_EMPCO3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_FIL_01: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VCF_FIL_02: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VCF_FIL_03: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VCF_PRICL1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_PRICL2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_PRICL3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_PRIFO1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_PRIFO2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_PRIFO3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                      '
    },
    VCF_BCOAG1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    VCF_BCOAG2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    VCF_BCOAG3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    VCF_FOR1MO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VCF_FOR2MO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VCF_FOR1PC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VCF_FOR2PC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    VCF_VENPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCF_VENVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCF_VENSRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCF_DIAPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_BLOQAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    VCF_MOTBLO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    VCF_DATCAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    VCF_DIAPEP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_CLAPEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VCF_CLAVEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VCF_DIAPES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_VENVEU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCF_CLASRV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VCF_DIAVEU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_CLAVEU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VCF_VENPNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCF_GRUECN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCF_DIAPNE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_DIAOUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    VCF_CONDIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VCF_CLAPNE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    VCF_JUSTIF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    VCF_VENOUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    VCF_MSGSAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    VCF_CLAOUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'VCF010'
  });
};

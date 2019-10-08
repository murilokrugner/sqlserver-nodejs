/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SB0010', {
    B0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    B0_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B0_PRV1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_PRV2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_PRV3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_PRV4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_PRV5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_PRV6: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_PRV7: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_PRV8: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_PRV9: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_DATA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_DATA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_DATA3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_DATA4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_DATA5: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_DATA6: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_DATA7: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_DATA8: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_DATA9: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_ALIQRED: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_DIASGAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_CODINTG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    B0_IMPNCM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_ECFLAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B0_ECFLAX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B0_ECPRV: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_DTUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_HRUMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    B0_LINKMON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    B0_SERVFIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    B0_ECIMGFI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    B0_ECPAIAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B0_ECTITU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    B0_ECPROFU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_ECCOMP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_ECDTEX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    B0_ECLARGU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_ECSEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    B0_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    B0_DTHRALT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                '
    }
  }, {
    tableName: 'SB0010'
  });
};

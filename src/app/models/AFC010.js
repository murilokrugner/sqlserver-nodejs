/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFC010', {
    AFC_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFC_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFC_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFC_EDT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFC_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AFC_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    AFC_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFC_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_HDURAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AFC_START: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFC_FINISH: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFC_HORAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFC_HORAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFC_HUTEIS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_DTATUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFC_DTATUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFC_EDTPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFC_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFC_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AFC_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFC_VALBDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_HRATUI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFC_HRATUF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFC_BDITAR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_HESF: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFC_RESTRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AFC_DTREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AFC_HRREST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AFC_TOTIMP: {
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
    AFC_IDPROJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    }
  }, {
    tableName: 'AFC010'
  });
};

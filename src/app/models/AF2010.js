/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AF2010', {
    AF2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF2_ORCAME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AF2_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AF2_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AF2_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                          '
    },
    AF2_UM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AF2_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_GRPCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AF2_COMPOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AF2_HDURAC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_EDTPAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AF2_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AF2_CCUSTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AF2_CLVL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AF2_ITEMCC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AF2_TPMEDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF2_PRIORI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_CODMEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AF2_FATURA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF2_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_CUSTO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_CUSTO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_CUSTO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_CUSTO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_ORDEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AF2_TXMO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_TXMO3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_TXMO4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_TXMO5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_BDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_VALBDI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_TOTAL: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AF2_UTIBDI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF2_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF2_TPTARE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    AF2_EDTORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                   '
    },
    AF2_MODORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AF2_REGOBR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AF2_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'AF2010'
  });
};

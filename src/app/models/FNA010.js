/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FNA010', {
    FNA_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FNA_IDMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FNA_ITMOV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    FNA_CBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    FNA_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    FNA_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FNA_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    FNA_SEQREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FNA_TPSALD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FNA_TPDEPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    FNA_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FNA_OCORR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FNA_DTPERI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FNA_DTPERF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    FNA_QUANTD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FNA_COEFIC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FNA_MOEDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    FNA_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    FNA_ESTORN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    }
  }, {
    tableName: 'FNA010'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AFM010', {
    AFM_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFM_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AFM_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AFM_NUMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFM_ITEMOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AFM_SEQOP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AFM_COD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AFM_QUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFM_TRT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AFM_PLANEJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AFM_QTSEGU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AFM_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AFM_IDPROT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
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
    tableName: 'AFM010'
  });
};

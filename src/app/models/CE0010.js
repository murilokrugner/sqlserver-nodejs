/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CE0010', {
    CE0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CE0_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '       '
    },
    CE0_PROPRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CE0_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CE0_NFBASE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CE0_NFALIQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CE0_NFALVA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CE0_NFVALO: {
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
    },
    CE0_VL197: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'CE0010'
  });
};

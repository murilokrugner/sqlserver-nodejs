/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CPU010', {
    CPU_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CPU_CODPRC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CPU_ITEM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CPU_SEQ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CPU_DESATV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPU_PERRET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    CPU_DESENG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPU_DESSPA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    CPU_DESPTG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
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
    tableName: 'CPU010'
  });
};

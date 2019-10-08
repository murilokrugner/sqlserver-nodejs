/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AN2010', {
    AN2_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AN2_CTRRVS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AN2_PROJET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AN2_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AN2_TAREFA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    AN2_RECURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AN2_DOCUME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AN2_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    AN2_HORAI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AN2_HORAF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    AN2_HQUANT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AN2_RECORI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
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
    }
  }, {
    tableName: 'AN2010'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SQ9010', {
    Q9_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q9_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q9_CURSO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    Q9_DESCRIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    Q9_PONTOS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Q9_CUSTOMS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Q9_ENTIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    Q9_ESCOLAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Q9_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    Q9_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    Q9_NIVEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q9_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q9_DURACAO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Q9_CODCONT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q9_DTALTER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    Q9_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    Q9_CODCOM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q9_CODQUA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q9_CODCERT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q9_DATVENC: {
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
    Q9_VALIDAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    Q9_CATCUR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    }
  }, {
    tableName: 'SQ9010'
  });
};
